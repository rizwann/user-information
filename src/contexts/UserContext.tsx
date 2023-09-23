import { createContext } from "react";
import { User } from "../mocks/data/usersData";

export type UserContextType = {
  users: User[];
};

// context for user data
export const UserContext = createContext<UserContextType>({
  users: [],
});
