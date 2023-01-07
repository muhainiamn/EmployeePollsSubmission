import { Link } from "react-router-dom";

const QuestionCard = ({question}) => {
    let date = new Date(question.timestamp);
    return (<div className="QuestionCard">
        <p id="cardAuthor" data-testid="cardAuthor">{question.author}</p>
        <p id="cardTime" data-testid="cardTime">{date.toLocaleString()}</p>
        <div >
        <Link className="Link" to={"questions/" + question.id} data-testid="link"><p >Show</p></Link>
        </div>
        
    </div>)
}

export default QuestionCard