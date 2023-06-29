import Logout from "../components/Logout";
import classes from "./UserNavbar.module.css";
import dashboard from "../assets/dashboard.png";
import question from "../assets/question.png";
import grades from "../assets/grades.png";
import quiz from "../assets/quiz.png";
import logout from "../assets/logout.png";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <nav >
        <ul>
          <li className={classes.li}>
            <Link className={classes.Link}>
              <img className={classes.icons} src={question} alt="quiz" />
              QuizApp
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/user/dashboard" class  className={classes.Link}>
              <img className={classes.icons} src={dashboard} alt="dashboard" />
              Dashboard
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.Link}>
              <img className={classes.icons} src={grades} alt="grades" />
              Grades
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.Link}>
              <img className={classes.icons} src={quiz} alt="quiz" />
              Quiz
            </Link> 
          </li>
          <li className={`d-flex ${classes.li}`}>
            <span>
              <img className={classes.icons} src={logout} alt="logout" />
            </span>
            <Logout height="30px" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
