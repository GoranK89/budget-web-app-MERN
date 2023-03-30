import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // TODO: add login functionality/authorization
  async function login() {
    props.loggedInState(true);
    navigate("/dashboard");
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="login-section">
      <h1>Login</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <input placeholder="Email" type="text" onChange={emailHandler} />
        <input
          placeholder="Password"
          type="password"
          onChange={passwordHandler}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </section>
  );
};

export default LoginPage;
