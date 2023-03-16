import { useState, useEffect } from "react";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  async function login() {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      props.setLoggedInStatus(true);
    }
    console.log(response);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="login-section">
      <h1>Budget tracker</h1>
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
        Or <a href="#">register</a>
      </p>
    </section>
  );
};

export default LoginPage;
