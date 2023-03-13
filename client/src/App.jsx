import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Budget from "./components/Budget";
const App = () => {
  const [loggedIn, setLoggedin] = useState(false);

  const setLoggedInData = (data) => {
    setLoggedin(data);
  };

  return (
    <>
      {!loggedIn && <LoginPage setLoggedInStatus={setLoggedInData} />}
      {loggedIn && <Budget />}
    </>
  );
};

export default App;
