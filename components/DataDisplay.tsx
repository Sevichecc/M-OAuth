'use client'

import useCreateApp from "@/hooks/useCreateApp";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AppEntry } from "../lib/types";

interface DataDisplayProps {
  appEntry: AppEntry;
}

const renderTableRow = (label: string, value: string | undefined) => (
  <TableRow>
    <TableCell className="font-medium">{label}</TableCell>
    <TableCell>{value}</TableCell>
  </TableRow>
);

const DataDisplay = () => {
  const { appEntry } = useCreateApp();

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Data Name</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {renderTableRow("ID", appEntry?.id)}
        {renderTableRow("Name", appEntry?.name)}
        {renderTableRow("Website", appEntry?.website || '')}
        {renderTableRow("Redirect URI", appEntry?.redirectUri)}
        {renderTableRow("Client ID", appEntry?.clientId)}
        {renderTableRow("Client Secret", appEntry?.clientSecret)}
        {renderTableRow("Vapid Key", appEntry?.vapidKey)}
      </TableBody>
    </Table>
  );
};

export default DataDisplay;
