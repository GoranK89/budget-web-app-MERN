import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  async function register() {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Registration successfull");
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    register();
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <section className="section-register">
      <h1>Register your account</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Email"
          type="text"
          onChange={emailHandler}
          value={email}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={passwordHandler}
          value={password}
        />
        <button className="btn-orange" type="submit">
          Submit
        </button>
        <Link to="/">Back to login</Link>
      </form>
    </section>
  );
};

export default RegisterPage;
