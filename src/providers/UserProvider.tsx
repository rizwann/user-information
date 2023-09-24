import { useEffect, useState } from "react";
import { UserContext, UserContextType } from "../contexts/UserContext";
import { fetchUsers, getAge } from "../lib/utils";
import { User } from "../mocks/data/usersData";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const URL = "/api/users";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers(URL);
      setUsers(data);
    };
    fetchData();
  }, []);

  const contextValue: UserContextType = {
    users: users.map((user) => {
      return {
        ...user,
        age: getAge(user.birthDate),
      };
    }),
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
