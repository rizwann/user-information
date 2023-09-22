import Users from "./components/Users";
import { UserProvider } from "./contexts/UserContext";
function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
