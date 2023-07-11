import classes from "./QuestionTemplate.module.css";

function QuestionTemplate(question) {
  const ques = Object.values(question);
  console.log(ques[0].quesType, ques);
  return (
    <div className={classes.main}>
      {ques.map((q) => {
        return <div key={q._id}>{q.quesType}</div>;
      })}
    </div>
  );
}

export default QuestionTemplate;
