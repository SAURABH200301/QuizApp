import { useState } from "react";
import Template1 from "../UI/Template1";
import classes from "./Quiz.module.css";
import ShowQuestion from "./ShowQuestion";
import { useDispatch } from "react-redux";
import { quesActions } from "../store/ques-slice";
import CreateQuiz from "./CreateQuiz";

function Quiz() {
  const [quesType, setQuesType] = useState("TF");
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("True");
  const [marks, setMarks] = useState(1);
  const [MultiAnswer1, setMultiAnswer1] = useState("");
  const [MultiAnswer2, setMultiAnswer2] = useState("");
  const [MultiAnswer3, setMultiAnswer3] = useState("");
  const [MultiAnswer4, setMultiAnswer4] = useState("");
  const [radioButton, setRadioButton] = useState("0");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const marksHandler = (e) => {
    setMarks(e.target.value);
  };

  const handleChange = (e) => {
    setQuesType(e.target.value);
  };

  const AnswerHandler = (e) => {
    setAnswer(e.target.value);
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };
  const multiHandler1 = (e) => {
    setMultiAnswer1(e.target.value);
  };
  const multiHandler2 = (e) => {
    setMultiAnswer2(e.target.value);
  };
  const multiHandler3 = (e) => {
    setMultiAnswer3(e.target.value);
  };
  const multiHandler4 = (e) => {
    setMultiAnswer4(e.target.value);
  };
  const RadioHandler = (e) => {
    setRadioButton(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
    dispatch(
      quesActions.addTitle({
        titleName: title,
      })
    );
  };
  const clear = () => {
    setQuesType("TF");
    setQuestion("");
    setAnswer("True");
    setMarks(1);
    setMultiAnswer1("");
    setMultiAnswer2("");
    setMultiAnswer3("");
    setMultiAnswer4("");
  };
  const addQuestionHandler = () => {
    if (question === "" || Answer === "") {
      alert("Please Fill the Required things");
      return;
    }
    if (quesType === "TF") {
      dispatch(
        quesActions.addQues({
          quesType: quesType,
          ques: question,
          ans: Answer,
          marks: marks,
        })
      );
    } else {
      const answers = [MultiAnswer1, MultiAnswer2, MultiAnswer3, MultiAnswer4];
      dispatch(
        quesActions.addQues({
          quesType: quesType,
          ques: question,
          marks: marks,
          answers: answers,
          ans: answers[radioButton],
        })
      );
    }
    clear();
  };
  return (
    <div className="m-5">
      <Template1>
        <div>
          <div className="d-flex justify-content-between mx-4">
            <h3>
              Create new quiz:{" "}
              <span>
                <input
                  type="text"
                  value={title}
                  onChange={titleHandler}
                  placeholder="Enter you Quiz title"
                />
              </span>
            </h3>
            <div>
              <CreateQuiz />
            </div>
          </div>
          <div className={`${classes.divider}`}></div>
          <div className="row mt-3">
            <div className="col-md-6 ">
              <label htmlFor="question" className="fw-bold">
                Question
              </label>
              <p>Type your question here</p>
            </div>
            <div className="col-md-6">
              <textarea
                id="question"
                rows="2"
                cols="80"
                value={question}
                onChange={questionHandler}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="customRange2" className="form-label fw-bold">
                Score
              </label>
              <p>Choose the score from 1-5</p>
            </div>
            <div className="col-md-6">
              <input
                type="range"
                className="form-range"
                min="1"
                max="5"
                id="customRange2"
                value={marks}
                onChange={marksHandler}
                style={{ width: "50%" }}
              />
              <p>Marks: {marks}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="questionType" className="fw-bold">
                Question Type
              </label>
              <p>Choose one of the type of the question</p>
            </div>
            <div className="col-md-6">
              {/* question type */}
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  value="TF"
                  checked={quesType === "TF"}
                  onChange={handleChange}
                />
                <label className={`btn ${classes.btnn}`} htmlFor="btnradio1">
                  True/False
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  value="MC"
                  checked={quesType === "MC"}
                  onChange={handleChange}
                />
                <label className={`btn ${classes.btnn}`} htmlFor="btnradio2">
                  Multiple Choice
                </label>
              </div>
            </div>
            {/* if the answer is of type True/false */}
            {quesType === "TF" && (
              <div className="row mt-4">
                <div className="col-md-6">
                  <p className="fw-bold">Answer</p>
                  <p>Choose the correct answer here</p>
                </div>
                <div className="col-md-6">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradi1"
                      id="btnradi1"
                      autoComplete="off"
                      value="True"
                      checked={Answer === "True"}
                      onChange={AnswerHandler}
                    />
                    <label
                      className={`btn ${classes.btnn}`}
                      htmlFor="btnradi1"
                    >
                      True
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradi2"
                      id="btnradi2"
                      autoComplete="off"
                      value="False"
                      checked={Answer === "False"}
                      onChange={AnswerHandler}
                    />
                    <label
                      className={`btn ${classes.btnn}`}
                      htmlFor="btnradi2"
                    >
                      False
                    </label>
                  </div>
                </div>
              </div>
            )}
            {quesType === "MC" && (
              <div className="row mt-3">
                <div className="col-md-6">
                  <p className="fw-bold">Answer</p>
                  <p>Type your options and choose the correct answer</p>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      className={`form-check-input ${classes.btnn}`}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="0"
                      checked={radioButton === "0"}
                      onChange={RadioHandler}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      <textarea
                        id="ans1"
                        rows="2"
                        cols="80"
                        value={MultiAnswer1}
                        onChange={multiHandler1}
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${classes.btnn}`}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="1"
                      checked={radioButton === "1"}
                      onChange={RadioHandler}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      <textarea
                        id="ans2"
                        rows="2"
                        cols="80"
                        value={MultiAnswer2}
                        onChange={multiHandler2}
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${classes.btnn}`}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value="2"
                      checked={radioButton === "2"}
                      onChange={RadioHandler}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      <textarea
                        id="ans3"
                        rows="2"
                        cols="80"
                        value={MultiAnswer3}
                        onChange={multiHandler3}
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className={`form-check-input ${classes.btnn}`}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value="3"
                      checked={radioButton === "3"}
                      onChange={RadioHandler}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      <textarea
                        id="ans4"
                        rows="2"
                        cols="80"
                        value={MultiAnswer4}
                        onChange={multiHandler4}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div className="d-flex flex-row-reverse ">
              <button
                type="button"
                className="btn btn-light border mx-4"
                onClick={clear}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn ${classes.btnn}`}
                onClick={addQuestionHandler}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </Template1>
      <div className="mt-3">
        <Template1>
          <ShowQuestion />
        </Template1>
      </div>
    </div>
  );
}

export default Quiz;
