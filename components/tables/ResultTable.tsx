"use client";
import { useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Credentials } from "@/lib/types";
import { CopyButton } from "@/components/ui/copybutton";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExternalLink } from "lucide-react";
import { getAuth } from "@/lib/utils";
import { AppInfo } from "../FormContainer";
import { KeyRound } from "lucide-react";
import { forwardRef } from "react";
import ClientOnly from "../ClientOnly";
interface ResultTableProps {
  credentials: Credentials;
  appInfo: AppInfo;
}

const renderTableRow = (label: string, value: string | undefined) => (
  <TableRow className="relative">
    <TableCell className="font-medium">{label}</TableCell>
    <TableCell className="flex items-center justify-between break-all font-mono">
      {value}
      {value && <CopyButton value={value} className="end-2 shrink-0" />}
    </TableCell>
  </TableRow>
);

const ResultTable: React.FC<ResultTableProps> = ({ credentials, appInfo }) => {
  const scrollToRef = useRef<HTMLDivElement>(null);
  const { instanceUrl, scopes } = appInfo;
  const {
    id,
    name,
    website,
    redirect_uri,
    client_id,
    client_secret,
    vapid_key,
  } = credentials;

  const isLocal = redirect_uri === "urn:ietf:wg:oauth:2.0:oob";

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-5" ref={scrollToRef}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[120px]">Type</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        {credentials && (
          <TableBody>
            {renderTableRow("ID", id)}
            {renderTableRow("Name", name)}
            {renderTableRow("Website", website || "")}
            {renderTableRow("Redirect URI", redirect_uri)}
            {renderTableRow("Client ID", client_id)}
            {renderTableRow("Client Secret", client_secret)}
            {renderTableRow("Vapid Key", vapid_key)}
          </TableBody>
        )}
      </Table>
      {isLocal ? (
        <Button onClick={() => getAuth(instanceUrl, client_id, scopes)}>
          <ExternalLink className="mr-2 h-4 w-4" />
          Generate Access Token
        </Button>
      ) : (
        <Alert>
          <KeyRound className="h-4 w-4" />
          <AlertTitle>Need an Access Token?</AlertTitle>
          <AlertDescription>
            Set the Redirect URI as{" "}
            <code className="mt-2 inline-block rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">
              urn:ietf:wg:oauth:2.0:oob
            </code>{" "}
            to obtain your access token.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ResultTable;
