import classes from "./main.module.css";
import { Link } from "react-router-dom";
import quiz from "../assets/quiz.png";

function Main() {
  return (
    <div className={`row ${classes.main} mt-5`}>
      <div className="p-5 col-md-8 ">
        <div className="d-flex justify-content-center">
          <h1 className={classes.fontHead}>Quiz App</h1>
        </div>
        <p className="fs-3 d-flex justify-content-around">Welcome ...</p>
        <div className="d-flex justify-content-center p-3">
          <div className="btn-group border">
            <Link to="/login">
              <button className={`btn ${classes.redColor} ${classes.fontBold}`}>
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className=" row">
          <div className="col-sm-12">
            <p className="fs-3 d-flex justify-content-center">New User</p>
          </div>
          <div className="col-sm-12">
            <span className="d-flex justify-content-center">
              <Link to="/register">
                <button
                  className={`btn border ${classes.redColor} ${classes.fontBold}`}
                >
                  Register Here
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={`col-md-4  ${classes.logoBox} `}>
        <img className={classes.logo} src={quiz} alt="quiz" />
      </div>
    </div>
  );
}

export default Main;
