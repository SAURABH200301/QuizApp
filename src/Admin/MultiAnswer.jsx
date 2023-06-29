import { useSelector } from "react-redux";
import DeleteButton from "../components/DeleteButton";

function MultiAnswer() {
  const ques = useSelector((state) => state.ques.questions);
  const quesMC = ques.filter((q) => q.quesType === "MC");
  let i=1;
  return (
    <div className="my-3">
      {quesMC.map((q) => {
        return (
          <div key={q.ques} className="row border-bottom p-2">
            <div className="col-md-6">
              <span className="fw-bold">Question:</span> {q.ques}
            </div>
            <div className="col-md-4">
              <div>
                <span className="fw-bold">Options:</span>{" "}
                <div className="row">
                  {q.answers.map((a) => {
                    return (
                      <p key={a} className="col-sm-3">
                       <span className="fw-bold">{i++}</span>: {a}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div>
                <span className="fw-bold">Answer:</span> {q.ans}
              </div>
            </div>
            <div className="col-md-2">
              <p>
                <span className="fw-bold">Marks:</span> {q.marks}
              </p>
              <DeleteButton deleteQues={q} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MultiAnswer;
