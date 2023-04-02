import logo from "/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__navlinks">
        <li>
          <a href="#">LINK 1</a>
        </li>
        <li>
          <a href="#">LINK 2</a>
        </li>
        <li>
          <a href="#">LINK 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
