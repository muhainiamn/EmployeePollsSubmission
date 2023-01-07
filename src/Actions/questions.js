import * as api from '../_DATA'

export const CREATE_QUESTION = 'createQuestion';
export const GET_QUESTIONS = 'getQuestions';

export const createQuestion = (question) => {
    return {
        type : CREATE_QUESTION, 
        question,
    }
}

export const handleCreateQuestion = (question , callback) => {
    return (dispatch) => {
        api._saveQuestion(question).then((savedQuestion) => {
            dispatch(createQuestion(savedQuestion));
            callback(); 
    })
}

}



export const getQuestionsAction = (questions) => {
    return {
        type : GET_QUESTIONS, 
        questions,
    }
}

export const handleGetQuestions = (callback) => {
    return (dispatch) => {
            api._getQuestions().then((questions) => {
            dispatch(getQuestionsAction(questions));
            callback();
          })
    }
}