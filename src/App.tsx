import { Header } from "./components/header";
import Users from "./components/users";
import { UserProvider } from "./providers/UserProvider";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <UserProvider>
          <Users />
        </UserProvider>
      </main>
    </div>
  );
}

export default App;
