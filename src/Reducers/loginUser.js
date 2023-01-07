import { LOGIN } from "../Actions/loginUser";
import { LOGOUT } from "../Actions/loginUser";

const loginUser = (state = "" , action) => {
    switch(action.type) {
        case LOGIN : 
            return action.user; 
        case LOGOUT :
            return ''; 
        default :      
          return state ;
    } 
}

export default loginUser ; 