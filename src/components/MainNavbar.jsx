import { Link } from "react-router-dom";
import classes from './MainNavbar.module.css'

const MainNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${classes.nav}`} >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold" style={{color:"#9DB2BF"}} >
          GetQuizy
        </span>
        <div className={` ${classes.navContent}`}>
          <ul className="nav mb-2 mb-lg-0 ">
            <li className="mx-2">
              <Link to="/login">
                <button className={`btn ${classes.login}`}>Login</button>
              </Link>
            </li>
            <li className="">
              <Link to="/register">
                <button  className={`btn ${classes.signup} `}>
                  SignUp
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
