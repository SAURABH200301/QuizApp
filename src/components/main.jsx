import classes from "./main.module.css";
import { Link } from "react-router-dom";
import quiz from "../assets/quiz.png";

function Main() {
  return (
    <div className={classes.main}>
      <div className="mt-5 mx-3">
        <div className="d-flex justify-content-center">
          <h1 className={classes.fontHead}>Quiz App</h1>
        </div>
        <p className="d-flex justify-content-around">Welcome ...</p>
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
            <p className="d-flex justify-content-center">New User</p>
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
      <div className={classes.logoBox}>
        <img className={classes.logo} src={quiz} alt="quiz" />
      </div>
    </div>
  );
}

export default Main;
