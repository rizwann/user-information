import React from "react";
import { useUser } from "../../contexts/UserContext";
import { getAge } from "../../lib/utils";
import { columns } from "./columns";
import { UsersDataTable } from "./data-table";

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
      <UsersDataTable columns={columns} data={newUsers} />;
    </div>
  );
};

export default Users;
