import Users from "./components/users";
import { UserProvider } from "./providers/UserProvider";
function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
