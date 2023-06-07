"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { CopyButton } from "@/components/ui/copybutton";

interface CopyableRowProps {
  label: string;
  value: string | null;
}

const CopyableRow: React.FC<CopyableRowProps> = ({ label, value }) => {
  return (
    <TableRow className="relative">
      <TableCell className="font-medium">{label}</TableCell>
      <TableCell className="flex items-center justify-between break-all font-mono">
        {value}
        {value && <CopyButton value={value} className="end-2 shrink-0" />}
      </TableCell>
    </TableRow>
  );
};

export default CopyableRow;
