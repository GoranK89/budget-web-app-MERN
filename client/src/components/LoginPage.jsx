import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/login-slice";
import { authorizeLogin } from "../store/login-actions";
import { Link, useNavigate } from "react-router-dom";

import HeroImg from "/images/landing1.jpg";

const LoginPage = () => {
  const { loggedIn, email, password, token, userId } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    dispatch(loginActions.setEmail(e.target.value));
  };

  const passwordHandler = (e) => {
    dispatch(loginActions.setPassword(e.target.value));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(authorizeLogin(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <section className="login-section">
      <img src={HeroImg} alt="hero" />
      <div className="form-wrapper">
        <h1>Login</h1>
        <form className="form-wrapper__login-form" onSubmit={submitHandler}>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={emailHandler}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordHandler}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
