import { useSelector } from "react-redux";
import MultiAnswer from "./MultiAnswer";
import TrueFalse from "./TrueFalse";
import { useEffect, useState } from "react";

function ShowQuestion() {
  const num = useSelector((state) => state.ques.numberOfQues);
  const totalMarks = useSelector((state) => state.ques.totalMarks);
  const title = useSelector((state) => state.ques.title);
  const [titleChange,setTitle]= useState("Added Question")
  useEffect(()=>{
    setTitle(title)
  },[title])
  return (
    <div>
      <h3 className="d-flex justify-content-around" >
        {titleChange || "Added Question"}
      </h3>
      <div
        style={{
          width: "100%",
          borderColor: "#27374D",
          borderStyle: "solid",
          borderWidth: "1px",
        }}
      ></div>
      {num === 0 && (
        <p className="d-flex justify-content-center">Enter your Question</p>
      )}
      {num > 0 && (
        <>
          <div className="d-flex justify-content-end">
            <span className="fw-bold">Total Marks:</span> {totalMarks}
          </div>
          <TrueFalse />
          <MultiAnswer />
        </>
      )}
    </div>
  );
}

export default ShowQuestion;
