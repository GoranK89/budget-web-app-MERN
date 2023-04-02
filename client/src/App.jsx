import { useSelector } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";

const App = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  // TODO: better routing
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={!loggedIn && <LoginPage />} />
          <Route path="/dashboard" element={loggedIn && <DashboardPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
