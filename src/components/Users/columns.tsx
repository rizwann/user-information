import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal } from "lucide-react";
import { getAge } from "../../lib/utils";
import { User } from "../../mocks/data/usersData";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const columns: ColumnDef<User>[] = [
  {
    header: "User ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Birth Date",
    accessorKey: "birthDate",
    cell: ({ row }) => {
      const date = new Date(row.getValue("birthDate"));
      const formattedDate = date.toLocaleDateString();
      return <div className="font-medium"> {formattedDate}</div>;
    },
  },
  {
    header: "Age",
    accessorKey: "age",
    cell: ({ row }) => {
      const age = getAge(row.getValue("birthDate"));
      return <div className="font-medium">{age}</div>;
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
