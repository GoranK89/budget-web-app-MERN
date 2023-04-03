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
          <a href="#">LINK 1</a>
        </li>
        <li>
          <a href="#">LINK 2</a>
        </li>
        <li>
          <a href="#">
            <img src={ProfileIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
