import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Home from "./Home";
import { handleGetQuestions } from "../Actions/questions";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import { Routes , Route } from "react-router-dom";
import Navigation from "./Navigation";
import QuestionView from "./QuestionView";


const Dashboard = ({loginUser , dispatch , questions}) => {
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        dispatch(handleGetQuestions(() => {
            setLoading(false);
        }));
    } , []);

    return (<div>

        {loading == false && ( <div>
           <Navigation />
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/questions/:id" element={<QuestionView />} />
          </Routes></div>)}
       
 </div>) ; 
}

export default connect(state => {return {
    loginUser : state.loginUser,
    questions : state.questions,
}
})(Dashboard); 

