import { TableColumn } from "../../components/users/UsersTable";

export const mockUsers = [
  {
    id: 1,
    name: "Myrah Wilton",
    email: "mwilton0@abc.net.au",
    birthDate: "1987-04-04",
  },
  {
    id: 2,
    name: "Ole Patridge",
    email: "opatridge1@mediafire.com",
    birthDate: "1990-09-01",
  },
  {
    id: 3,
    name: "Dixie Rowet",
    email: "drowet2@latimes.com",
    birthDate: "1975-08-18",
  },
];

export const mockUsersWithAge = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    birthDate: "1990-01-01",
    age: 30,
  },
  {
    id: 2,
    name: "Myrah Wilton",
    email: "mwilton0@abc.net.au",
    birthDate: "1987-04-04",
    age: 36,
  },
  {
    id: 3,
    name: "Ole Patridge",
    email: "opatridge1@mediafire.com",
    birthDate: "1990-09-01",
    age: 33,
  },
  {
    id: 4,
    name: "Dixie Rowet",
    email: "drowet2@latimes.com",
    birthDate: "1975-08-18",
    age: 48,
  },
];

export const mockColumns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Birth Date", accessor: "birthDate" },
  { header: "Age", accessor: "age" },
] as TableColumn[];
