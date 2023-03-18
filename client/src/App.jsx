import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
const App = () => {
  const [loggedIn, setLoggedin] = useState(false);

  const setLoggedInState = (data) => {
    setLoggedin(data);
  };

  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/login"
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
