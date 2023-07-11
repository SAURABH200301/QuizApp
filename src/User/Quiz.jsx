import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionDisplay from "./QuestionDisplay";

function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [questions, setQuestions] = useState([]);

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
        const theQuiz = array.find((quiz) => quiz._id === id);
        setQuiz(theQuiz);
        setQuestions(theQuiz.questions);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(quiz);
  // console.log(id);
  return (
    <div className=" h-100">
      <div className="m-3   ">
        <div>Title: {quiz.title}</div>
      </div>
      <div className="  d-flex flex-row overflow-hidden">
        <QuestionDisplay questions={questions}/>
      </div>
    </div>
  );
}

export default Quiz;
