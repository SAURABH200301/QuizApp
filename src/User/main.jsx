import Profile from './Profile'
import QuizAvailable from './QuizAvailable';

const Main=()=>{
    
    return(
        <div className="row m-5">
            <div className="col-md-8 "><QuizAvailable/></div>
            <div className="col-md-4 "><Profile/></div>
        </div>
    )
}

export default Main;