import { Header } from "./components/header";
import Users from "./components/users";
import { UserProvider } from "./providers/UserProvider";
function App() {
  return (
    <>
      <Header />
      <UserProvider>
        <Users />
      </UserProvider>
    </>
  );
}

export default App;
