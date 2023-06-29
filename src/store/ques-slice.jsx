import { createSlice } from '@reduxjs/toolkit';


// const questions = [
//     {
//       quesType: "TF",
//       ques: "What is True?",
//       ans: "True",
//       marks: 5
//     },
//     {
//       quesType: "MC",
//       ques: "Do you know?",
//       ans: "No",
//       answers: ["No", "Yes", "janna hi nahi hai", "arr tu ja re"],
//       marks: 4
//     },
//   ];
const questions=[];
const quesSlice = createSlice({
    name: 'ques',
    initialState: { questions:questions, numberOfQues: 0,totalMarks:0,titleName:"Enter your Quiz name"},
    reducers: {
        addTitle(state,action){
            
            state.titleName=action.payload.titleName
        },
        addQues(state,action){
            state.numberOfQues++;
            const newQues=action.payload;
            state.totalMarks+=parseInt(newQues.marks)
            let question={};
            if(newQues.quesType==='TF'){
                question={
                    quesType: newQues.quesType,
                    ques:newQues.ques,
                    ans:newQues.ans,
                    marks: newQues.marks
                }
            }else{
                question={
                    quesType:newQues.quesType,
                    ques: newQues.ques,
                    ans:newQues.ans,
                    answers: newQues.answers,
                    marks:newQues.marks
                }
            }
            state.questions.push(question)
        },
        removeQues(state,action){   
            state.numberOfQues--;
            const deleteQues=action.payload;
            state.totalMarks-=deleteQues.marks;
            const newQuestions= state.questions.filter((q)=>q.ques!==deleteQues.ques);
            state.questions=newQuestions;
        }
    }
})
export const quesActions = quesSlice.actions;

export default quesSlice;