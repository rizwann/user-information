import { createContext } from "react";
import { User } from "../mocks/data/usersData";

export type TableUser = User & { age: number };

export type UserContextType = {
  users: TableUser[];
};

// context for user data
export const UserContext = createContext<UserContextType>({
  users: [],
});
