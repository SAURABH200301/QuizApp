import { useSelector } from "react-redux";
import DeleteButton from "../components/DeleteButton";

function TrueFalse() {
  const ques = useSelector((state) => state.ques.questions);
  const quesTF = ques.filter((q) => q.quesType === "TF");
  return (
    <div className="my-3">
      {quesTF.map((q) => {
        return (
          <div key={q.ques} className="row border-bottom p-2">
            <div className="col-md-6 "><span className="fw-bold">Question:</span> {q.ques}</div>
            <div className="col-md-4"><span className="fw-bold">Answer:</span> {q.ans}</div>
            <div className="col-md-2 d-inline">
              <p><span className="fw-bold">Marks:</span> {q.marks}</p>
              <DeleteButton deleteQues={q}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrueFalse;
