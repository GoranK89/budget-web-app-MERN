import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/login-slice";

import logo from "/images/logo.png";
import ProfileIcon from "/icons/icon-profile3.png";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <p>MANAGE YOUR FINANCES IN ONE PLACE</p>

      <ul className="navbar__navlinks">
        <li>
          {loggedIn && (
            <Link onClick={logoutHandler} to="/">
              Logout
            </Link>
          )}
        </li>
        <li>
          <Link to="#">
            <img src={ProfileIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
