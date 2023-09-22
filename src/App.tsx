import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <div>Test</div>
    </UserProvider>
  );
}

export default App;
