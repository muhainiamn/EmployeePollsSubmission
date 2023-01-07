import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from '../Actions/loginUser';
import { useEffect } from 'react';
import { handleGetUsers } from '../Actions/users';


const Login = ({dispatch , users}) => {
    const [user , setUser] = useState("mtsamis"); 
    const [password , setPassword] = useState("xyz123"); //This is hardcoded for testing purposes and ease of access only 

    useEffect(() => {
        dispatch(handleGetUsers());
    } , []);

    const handleUserChange = (e) => {
        e.preventDefault(); 
        setUser(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault(); 
        setPassword(e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(!users[user] || users[user].password != password){
            alert("Username or password are incorrect");
        }
        else {
        dispatch(loginAction(user));
        }
        
    }




    return (<div className='Login'>
<h1>Employee Polls</h1>
<h3>Log In</h3>
<form className='myForm' onSubmit={handleSubmit}>
<p>User</p>
<input type="text" value = {user} onChange = {handleUserChange} data-testid="username"/>
<p>Password</p>
<input type="text" value = {password} onChange = {handlePasswordChange} data-testid="password"/>

<button type='submit' disabled = {user == '' || password == ''} data-testid="submit">submit</button>
</form>
</div>)
}

export default connect(({users}) => {
    return {
    users,
    }
})(Login);