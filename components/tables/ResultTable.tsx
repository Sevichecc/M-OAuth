"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Credentials } from "@/lib/types";
import { CopyButton } from "@/components/ui/copybutton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { getAuth } from "@/lib/utils";
import { AppInfo } from "../FormContainer";

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

  return (
    <div className="flex flex-col items-center gap-4">
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
      {redirect_uri === "urn:ietf:wg:oauth:2.0:oob" && (
        <Button
          onClick={() => getAuth(instanceUrl, client_id, scopes)}
          variant="outline"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Generate Access Token
        </Button>
      )}
    </div>
  );
};

export default ResultTable;
