import QuestionsSection from "./QuestionsSection";
import { connect } from "react-redux";
import { useState } from "react";

const Home = ({unansweredQuestions , answeredQuestions}) => {

    const [showAnswered , setShowAnswered] = useState(false);
    const handleToggleView = (e) => {
        e.preventDefault(); 
        setShowAnswered(!showAnswered);
    } 
    return (<div>
        <button id="toggleHomeView" onClick={handleToggleView}>{showAnswered == false ? 'Show Answered Questions' : 'Show Unanswered Questions'}</button>
        {showAnswered == false ? <QuestionsSection title = "New Questions" questionsList = {unansweredQuestions} />
         : <QuestionsSection title = "Done" questionsList = {answeredQuestions} />}
        
        
        
    </div>)
}

export default connect(({users , questions , loginUser}) => {
    let answeredQuestions = []; 
    let unansweredQuestions = []; 
    let user = users[loginUser];

    for (var key of Object.keys(questions)) {
        if (user.answers[key]){
            answeredQuestions.push(questions[key]);
        }
        else {
            unansweredQuestions.push(questions[key]);
        }
    }
    

    return {
        answeredQuestions,
        unansweredQuestions,
    }
})(Home) ; 