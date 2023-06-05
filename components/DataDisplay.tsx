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
import { CopyButton } from "./ui/copybutton";

const renderTableRow = (label: string, value: string | undefined) => (
  <TableRow className="group relative">
    <TableCell className="font-medium">{label}</TableCell>
    <TableCell className="font-mono break-all flex justify-between items-center">
      {value} 
      {value && <CopyButton value={value} className="end-2 shrink-0"/>}
    </TableCell>
  </TableRow>
);

const DataDisplay = ({ appEntry }: { appEntry: AppEntry }) => {
  return (
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
  );
};

export default DataDisplay;
