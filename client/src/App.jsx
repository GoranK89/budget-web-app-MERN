import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
const App = () => {
  //TODO: redux state management
  const [loggedIn, setLoggedin] = useState(false);

  const setLoggedInState = (data) => {
    setLoggedin(data);
  };

  // TODO: better routing
  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn && <LoginPage loggedInState={setLoggedInState} />
            }
          />
          <Route path="/dashboard" element={loggedIn && <DashboardPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
