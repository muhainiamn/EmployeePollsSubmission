import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../Actions/shared";
import QuestionOption from "./QuestionOption";
import QuestionStats from "./QuestionStats";


const QuestionView = ({questions, dispatch , loginUser , user , users}) => {
    let params = useParams();
    const {id} = params; 
    const question = questions[id];


    const handleOptionOne = (e) => {
        e.preventDefault(); 
        dispatch(handleAnswerQuestion(loginUser , question.id , "optionOne"));
    }

    const handleOptionTwo = (e) => {
        e.preventDefault(); 
        dispatch(handleAnswerQuestion(loginUser , question.id , "optionTwo"));
    }

    let optionOneVoters = '';
    let optionTwoVoters = '';
    let totalVoters ='';

    if(question){
    optionOneVoters = question.optionOne.votes.length;
    optionTwoVoters = question.optionTwo.votes.length;
    totalVoters = optionOneVoters + optionTwoVoters;
    }
    
    return (

        <div>
            {question ? <div><h3>Poll by {question && question.author}</h3>
            <img src={users[question.author].avatarURL} alt={`Avatar of ${question.author}`} className="avatar"  />
            {user.answers[question.id] ? <div>
                <QuestionStats answerText={question.optionOne.text} numberOfUsers = {totalVoters} numberOfVotedUsers = {optionOneVoters} isUserVoted = {user.answers[question.id] == 'optionOne'}/>
                <QuestionStats answerText={question.optionTwo.text} numberOfUsers = {totalVoters} numberOfVotedUsers = {optionTwoVoters} isUserVoted = {user.answers[question.id] == 'optionTwo'}/>
                </div>  : <div>
                <h2>Would you rather</h2>
                <QuestionOption optionText={question.optionOne.text} handleOption = {handleOptionOne}/>
                <QuestionOption optionText={question.optionTwo.text} handleOption = {handleOptionTwo}/>
                </div>}</div> : <h1>404 Page not found</h1>}
            
            

        </div>
    );
}

export default connect(({questions , loginUser , users}) => {
    

    return {
        loginUser, 
        user : users[loginUser],
        users,
        questions,
    }
})(QuestionView) ; 