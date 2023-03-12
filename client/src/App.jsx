import { useState } from "react";
import LoginPage from "./components/LoginPage";
const App = () => {
  const [loggedIn, setLoggedin] = useState(false);

  const setLoggedInData = (data) => {
    setLoggedin(data);
  };
  return (
    <>
      {!loggedIn ? (
        <LoginPage setLoggedInStatus={setLoggedInData} />
      ) : (
        <p>You are logged in</p>
      )}
    </>
  );
};

export default App;
