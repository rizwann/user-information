import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownUp, Copy, MoreHorizontal } from "lucide-react";
import { User } from "../../../mocks/data/usersData";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export const columns: ColumnDef<User>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          User Id
          <ArrowDownUp className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    accessorKey: "id",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowDownUp className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    accessorKey: "name",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Email
          <ArrowDownUp className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    accessorKey: "email",
  },
  {
    header: "Birth Date",
    accessorKey: "birthDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("birthDate"));
      const formattedDate = date.toLocaleDateString();
      return <div> {formattedDate}</div>;
    },
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Age
          <ArrowDownUp className="w-4 h-4 ml-2" />
        </Button>
      );
    },

    accessorKey: "age",
    cell: ({ row }) => {
      const age: number = row.getValue("age");

      return <div className="ml-2"> {age} years</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const id = user.id;
      const userEmail = user.email;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(id.toString())}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy id
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(userEmail)}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Email
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
