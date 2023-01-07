import * as api from '../_DATA'

export const GET_DATA = 'getData';
export const ANSWER_QUESTION = 'answerQuestion';


export const getDataAction = (users , questions) => {
    return {
        type : GET_DATA, 
        users, 
        questions,
    }
}

export const handleGetData = () => {
    return (dispatch) => {
        Promise.all([
            api._getUsers(),
            api._getQuestions(),
          ]).then(([users, questions]) => {
            dispatch(getDataAction(users , questions));
          })
    }
}

export const answerQuestion = (username , questionID , answer) => {
    return {
        type : ANSWER_QUESTION, 
        questionID, 
        answer, 
        username,
    }
}

export const handleAnswerQuestion = (authedUser , qid , answer) => {
    let questionAnswer = {
        authedUser, 
        qid, 
        answer 
    }
    return (dispatch) => {
        api._saveQuestionAnswer(questionAnswer).then((result) => {
            dispatch(answerQuestion(authedUser , qid , answer));
            console.log(result);
    })
}
}