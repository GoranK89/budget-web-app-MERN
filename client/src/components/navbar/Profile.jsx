import { useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { Link } from "react-router-dom";
import ProfileIcon from "/icons/icon-profile3.png";

const Profile = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const userEmail = useSelector((state) => state.login.email);

  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };

  return (
    <>
      <div>
        {loggedIn && (
          <Link onClick={logoutHandler} to="/">
            Logout
          </Link>
        )}
      </div>
      {loggedIn && <p>User:{userEmail}</p>}
      <div>
        <Link to="#">
          <img src={ProfileIcon} />
        </Link>
      </div>
    </>
  );
};

export default Profile;
