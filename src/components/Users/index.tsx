import React from "react";
import { useUser } from "../../hooks/useUser";
import { getAge } from "../../lib/utils";
import { UsersDataTable } from "./usersDataTable";
import { columns } from "./usersDataTable/columns";

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
      <UsersDataTable columns={columns} data={newUsers} />
    </div>
  );
};

export default Users;
