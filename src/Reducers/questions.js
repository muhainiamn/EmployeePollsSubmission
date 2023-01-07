import { CREATE_QUESTION, GET_QUESTIONS } from "../Actions/questions";
import { ANSWER_QUESTION } from "../Actions/users";

const questions = (state = {} , action) => {
    switch(action.type){
        case GET_QUESTIONS : 
           return action.questions;
        case CREATE_QUESTION : 
           return {
            ...state,
            [action.question.id] : action.question,
           };
        case ANSWER_QUESTION : 
        return {
         ...state,
         [action.questionID] : {
             ...state[action.questionID], 
             [action.answer] : {
                 ...state[action.questionID][action.answer],
                 votes : [
                  ...state[action.questionID][action.answer].votes, 
                  action.username,
                 ]
             }

         }
     }         
        default : 
           return state ; 
    }
}

export default questions ; 