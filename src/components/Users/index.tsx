import React from "react";
import { useUsers } from "../../hooks/useUsers";
import UsersTable, { TableColumn } from "./UsersTable";

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Birth Date", accessor: "birthDate" },
  { header: "Age", accessor: "age" },
] as TableColumn[];

const Users: React.FC = () => {
  const { users } = useUsers();
  return (
    <div className="container py-10 mx-auto">
      <UsersTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
