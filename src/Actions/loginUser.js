export const LOGIN = 'login';
export const LOGOUT = 'logout';

export const loginAction = (user) => {
    return {
        type : LOGIN, 
        user,
    }
}

export const logoutAction = () => {
    return {
        type : LOGOUT, 
    }
}