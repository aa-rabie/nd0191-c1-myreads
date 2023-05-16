import "./App.css";

import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <div className={navigation.state === "loading" ? "app loading" : "app"}>
      <Outlet />
    </div>
  );
}

export default App;
