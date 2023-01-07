import QuestionsSection from "./QuestionsSection";
import { connect } from "react-redux";

const Home = ({unansweredQuestions , answeredQuestions}) => {


    
    return (<div>
        <QuestionsSection title = "New Questions" questionsList = {unansweredQuestions} />
        <QuestionsSection title = "Done" questionsList = {answeredQuestions} />
        
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