import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/login-slice";

import { Link, useNavigate } from "react-router-dom";

import HeroImg from "/images/landing1.jpg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginSlice = useSelector((state) => state.login);
  const navigate = useNavigate();

  // TODO: send login request to server
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginActions.login());
    navigate("/dashboard");
  };

  return (
    <section className="login-section">
      <img src={HeroImg} alt="hero" />
      <div className="form-wrapper">
        <h1>Login</h1>
        <form className="form-wrapper__login-form" onSubmit={submitHandler}>
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="password" />
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
