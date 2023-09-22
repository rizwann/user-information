import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../mocks/data/usersData";

type UserContextType = {
  users: User[];
};

type UserProviderProps = {
  children: React.ReactNode;
};

// context for user data
const UserContext = createContext<UserContextType>({
  users: [],
});

// a custom hook useUser for consuming our UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
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

  console.log(users);
  const contextValue: UserContextType = {
    users,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
