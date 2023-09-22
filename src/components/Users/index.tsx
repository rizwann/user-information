import React from "react";
import { useUser } from "../../contexts/UserContext";
import { columns } from "./columns";
import { UsersDataTable } from "./data-table";

type Props = {};

const Users: React.FC<Props> = () => {
  const { users } = useUser();
  return <UsersDataTable columns={columns} data={users} />;
};

export default Users;
