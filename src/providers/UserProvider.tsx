import { useEffect, useState } from "react";
import { UserContext, UserContextType } from "../contexts/UserContext";
import { User } from "../mocks/data/usersData";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // mock-fetch users from api
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const fetchedUsers = await res.json();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log("Error fetching users data", error);
      }
    };

    fetchUsers();
  }, []);

  const contextValue: UserContextType = {
    users,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
