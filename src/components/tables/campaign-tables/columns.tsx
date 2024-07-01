"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { dataTimeFormat } from "@/lib/utils";
import { Campaign } from "@/models/campaign";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Campaign>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nome",
    header: "NOME",
  },
  {
    accessorKey: "categoria",
    header: "CATEGORIA",
    cell: ({ row }) => row.original.category?.name || "-",
  },
  {
    accessorKey: "dataInicio",
    header: "INÍCIO",
    cell: ({ row }) => dataTimeFormat(new Date(row.original.dataInicio)),
  },
  {
    accessorKey: "dataFim",
    header: "TÉRMINO",
    cell: ({ row }) => dataTimeFormat(new Date(row.original.dataInicio)),
  },
  {
    accessorKey: "status",
    header: "STATUS",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
