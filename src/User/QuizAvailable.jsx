import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import classes from "./QuizAvailable.module.css";

function QuizAvailable() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    const response = await fetch("http://localhost:5000/api/quiz/getquiz", {
      method: "POST",
    });
    const data = await response.json();

    const array = Object.values(data.quizzes);
    setQuiz(array);
  };

  return (
    <div>
      <h2>Available Quiz</h2>
      {quiz.map((q) => {
        const date = new Date(q.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        return (
          <div
            key={q._id}
            className={`m-3 ${classes.container}  rounded shadow `}
          >
            <div>
              <p>Title: {q.title}</p>
              <p>Number of Questions: {q.numberOfQues}</p>
              <p>Total Marks: {q.totalMarks}</p>
              <p>{day} : {month} : {year}</p>
            </div>
            <div className={classes.iconContainer}>
              <Link>
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
