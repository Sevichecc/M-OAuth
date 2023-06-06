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
import { AppEntry } from "@/lib/types";
import { CopyButton } from "@/components/ui/copybutton";
import { Button } from "@/components/ui/button";

interface ResultTableProps {
  appEntry: AppEntry;
  getAccessToken: (appEntry: AppEntry) => Promise<void>;
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

const ResultTable: React.FC<ResultTableProps> = ({
  appEntry,
  getAccessToken,
}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[120px]">Type</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {renderTableRow("ID", appEntry?.id)}
          {renderTableRow("Name", appEntry?.name)}
          {renderTableRow("Website", appEntry?.website || "")}
          {renderTableRow("Redirect URI", appEntry?.redirect_uri)}
          {renderTableRow("Client ID", appEntry?.client_id)}
          {renderTableRow("Client Secret", appEntry?.client_secret)}
          {renderTableRow("Vapid Key", appEntry?.vapid_key)}
        </TableBody>
      </Table>
      <Button onClick={()=>getAccessToken(appEntry)}>Generate AcessToken</Button>
    </>
  );
};

export default ResultTable;
