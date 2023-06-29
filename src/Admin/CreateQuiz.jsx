import { useState } from "react";
import { useSelector } from "react-redux";

function CreateQuiz() {
  const num = useSelector((state) => state.ques.numberOfQues);
  const totalMarks = useSelector((state) => state.ques.totalMarks);
  const ques = useSelector((state) => state.ques.questions);
  const title = useSelector((state) => state.ques.titleName);
  const question = [];
  ques.map((q) => {
    question.push({
      quesType: q.quesType,
      questionText: q.ques,
      options: q.quesType === "MC" ? q.answers : "",
      ans: q.ans,
      marks: q.marks,
    });
  });
  const [id, setId] = useState("");
  async function fetchUsername() {
    const res = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token").toString(),
      },
    });
    const data = await res.json();
    const Id = data._id;
    setId(Id);
  }

  const createQuizhandler = async () => {
    fetchUsername();
    try {
      const response = await fetch("http://localhost:5000/api/quiz/setquiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attemptedBy: [],
          createdBy: id,
          title: title,
          totalMarks: totalMarks,
          numberOfQues: num,
          questions: question,
        }),
      });
      const resp = await response.json();
      if(!resp.success){
        throw new Error("Something went wrong")
      }else{
        alert("Quiz has been created")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="btn btn-primary border" onClick={createQuizhandler}>
        Create Quiz
      </button>
    </div>
  );
}

export default CreateQuiz;
