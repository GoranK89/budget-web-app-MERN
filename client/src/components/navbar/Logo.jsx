import { Link } from "react-router-dom";
import ImgLogo from "/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={ImgLogo} alt="logo" className="imgLogo" />
    </Link>
  );
};

export default Logo;
