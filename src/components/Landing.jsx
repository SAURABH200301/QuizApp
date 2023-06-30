import classes from "./Landing.module.css";
import MainNavbar from "./MainNavbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="mb-3 ">
        <MainNavbar />
      </div>
      <div>
        <div className={classes.hero}></div>
        <div className={classes.inner}>
          <div>
            <p>The best digital study tools</p>
          </div>
          <div>
            <Link to="/register">
              <button className={`btn ${classes.signup} `}>
                Register for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
