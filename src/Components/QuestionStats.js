const QuestionStats = ({numberOfUsers , numberOfVotedUsers , answerText , isUserVoted}) => {
    return (
        <div className="QuestionStats">
            <p>Option : {answerText}</p>
            <p>Voted users : {numberOfVotedUsers}          {isUserVoted == true && <span id="optionSelected">Option Selected</span>}</p>
            <p>Voted users Percentage : {numberOfVotedUsers*100/numberOfUsers}%</p>
        </div>
    )
}

export default QuestionStats; 