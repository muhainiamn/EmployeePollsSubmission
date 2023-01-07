import * as api from '../_DATA'

export const GET_USERS = 'getUsers';
export const ANSWER_QUESTION = 'answerQuestion';


export const getUsersAction = (users) => {
    return {
        type : GET_USERS, 
        users,
    }
}

export const handleGetUsers = () => {
    return (dispatch) => {
            api._getUsers().then((users) => {
            dispatch(getUsersAction(users));
          })
    }
}