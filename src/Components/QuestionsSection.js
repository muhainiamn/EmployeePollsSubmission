import QuestionCard from "./QuestionCard"; 

const QuestionsSection = ({title , questionsList}) => {
    questionsList.sort((a , b) => {
        return b.timestamp - a.timestamp;
    })
    return (<div className="QuestionsSection">
        <div className="titleDiv">
        <h3 >{title}</h3>
        </div>
        {questionsList.map(question => <QuestionCard question = {question} key = {question.id} />)}
        
    </div>);
} 

export default QuestionsSection ; 