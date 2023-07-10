import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import classes from "./QuizAvailable.module.css";
import quizImg from "../assets/questions.png";

function QuizAvailable() {
  const [quiz, setQuiz] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quiz/getquiz", {
        method: "POST",
      });
      const data = await response.json();
      if (data.message === "No quizzes found") {
        setEmpty(true);
      } else {
        const array = Object.values(data.quizzes);
        setQuiz(array);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <h2 className={classes.available}>Available Quiz</h2>
      {empty && (
        <div className="d-flex flex-column justify-content-center fs-4 fw-bold align-items-center">
          <div>No quizzes found</div>
          <img src={quizImg} className={classes.img} alt="no quiz found" />
        </div>
      )}
      {!empty &&
        quiz.map((q) => {
          const date = new Date(q.date);
          const year = date.getFullYear();
          const month = months[date.getMonth() + 1];
          const day = date.getDate();
          return (
            <div
              key={q._id}
              className={`mt-3 px-3 ${classes.container} rounded shadow `}
            >
              <div className={` d-flex ${classes.content}`}>
                <b className="text-capitalize px-2">{q.title} | </b>
                <div className="px-2">
                  {" "}
                  Number of Questions: <b>{q.numberOfQues} |</b>
                </div>
                <div className="px-2">
                  {" "}
                  Total Marks: <b>{q.totalMarks}</b>
                </div>
              </div>
              <div className={`text-capitalize px-3 ${classes.date}`}>
                {" "}
                start date:{" "}
                <b>
                  {" "}
                  {day} {month}, {year}
                </b>
              </div>
              <div className={classes.iconContainer}>
                <Link to={`/user/quiz/${q._id}`}>
                  <img className={classes.icon} src={arrow} alt="go" />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default QuizAvailable;
