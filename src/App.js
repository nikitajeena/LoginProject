import { Login } from "./Component/Login";
import { useSelector } from "react-redux";
import { Dashboard } from "./Component/Dashboard";

function App() {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });
  console.log(isAuthenticated, "this is isAuthenticated");

  return (
    <div className="App">{isAuthenticated ? <Dashboard /> : <Login />}</div>
  );
}

export default App;
