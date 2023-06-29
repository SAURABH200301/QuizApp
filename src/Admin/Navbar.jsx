import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Logout from "../components/Logout";

function Navbar() {
  const [username, setUsername] = useState("username");
  useEffect(() => {
    async function fetchUsername() {
      const res = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token").toString(),
        },
      });
      const data = await res.json();
      const user = data.name;
      setUsername(user);
    }
    fetchUsername();
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg ${classes.bg}`}
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Quiz-app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Results
              </a>
            </li>
          </ul>
          <div className="dropdown" style={{width:"120px"}}>
            <button
              className="btn bg-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {username}
            </button>
            <ul className={`dropdown-menu ${classes.mx}`}>
              <li className={`${classes.liHover}`}>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li className={`${classes.liHover}`}>
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
