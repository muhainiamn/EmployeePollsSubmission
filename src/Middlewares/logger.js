const logger = (store) => (next) => (action) => {
    console.log("the action = " , action);
    let result = next(action); 
    console.log("new state = " , store.getState());
    return result ; 
}

export default logger ; 