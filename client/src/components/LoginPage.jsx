import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="login-section">
      <h1>Budget tracker</h1>
      <form className="login-form" onSubmit={submitHandler}>
        <input placeholder="Email" type="email" onChange={emailHandler} />
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
