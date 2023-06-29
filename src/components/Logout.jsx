import { Navigate, Link } from "react-router-dom";

function Logout() {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };
  return (
    <Link to="/" className="dropdown-item" onClick={logoutHandler}>
      Logout
    </Link>
  );
}

export default Logout;
