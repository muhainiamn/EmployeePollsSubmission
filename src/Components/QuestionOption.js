const QuestionOption = ({optionText , handleOption}) => {
    return (<div className="QuestionOption">
        <p>{optionText}</p>
        <button onClick={handleOption}>Vote</button>
    </div>)
}

export default QuestionOption; 