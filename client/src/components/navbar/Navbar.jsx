import Logo from "./Logo";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logoWrapper">
        <Logo />
      </div>
      <div className="navbar__profile">
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
