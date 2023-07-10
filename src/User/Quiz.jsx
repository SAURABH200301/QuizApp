import { useParams } from "react-router-dom"

function Quiz() {
    const {id}= useParams();
    console.log(id)
  return (
    <div>Quiz</div>
  )
}

export default Quiz;