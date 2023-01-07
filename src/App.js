import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import { connect } from "react-redux";


const App = ({loginUser}) => {
  return (
    <div>
    {loginUser ? <Dashboard /> : <Login />}
    </div>
  );
}

export default connect(state => { return {
  loginUser : state.loginUser ,
}
}
)(App);
