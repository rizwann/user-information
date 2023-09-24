import React from "react";
import { useUser } from "../../hooks/useUser";
import { getAge } from "../../lib/utils";
import UsersTable, { TableColumn } from "./UsersTable";
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Birth Date", accessor: "birthDate" },
  { header: "Age", accessor: "age" },
] as TableColumn[];

const Users: React.FC = () => {
  const { users } = useUser();

  const newUsers = users.map((user) => {
    return {
      ...user,
      age: getAge(user.birthDate),
    };
  });
  return (
    <div className="container py-10 mx-auto">
      <UsersTable columns={columns} data={newUsers} />
    </div>
  );
};

export default Users;
