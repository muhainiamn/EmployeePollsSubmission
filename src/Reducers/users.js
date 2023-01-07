import { GET_DATA } from "../Actions/shared";
import { GET_USERS } from "../Actions/users";
import { ANSWER_QUESTION } from "../Actions/users";
import { CREATE_QUESTION } from "../Actions/questions";



const users = (state = {} , action) => {
    switch(action.type){
        case GET_USERS : 
            return action.users;
        case ANSWER_QUESTION : 
            return {
                ...state,
                [action.username] : {
                    ...state[action.username], 
                    answers : {
                        ...state[action.username].answers,
                        [action.questionID] : action.answer,
                    }

                }
            }

            case CREATE_QUESTION : 
            return {
                ...state,
                [action.question.author] : {
                    ...state[action.question.author], 
                    questions : [
                        ...state[action.question.author].questions,
                        action.question.id,
                ]

                }
            }

        default : 
            return state ; 
    }
}

export default users ; 