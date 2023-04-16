import { Link } from "react-router-dom";

import logo from "/images/logo.png";
import ProfileIcon from "/icons/icon-profile3.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
        <img src={logo} alt="logo" />
      </div>

      <p>MANAGE YOUR FINANCES IN ONE PLACE</p>

      <ul className="navbar__navlinks">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
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
