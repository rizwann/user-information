//a custom hook to serve the user-context value

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
