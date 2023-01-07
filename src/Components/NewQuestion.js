import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCreateQuestion } from "../Actions/questions";

const NewQuestion = ({loginUser , dispatch}) => {
    
    const [firstOption , setFirstOption] = useState('');  
    const [secondOption , setSecondOption] = useState('');  
    var navigate = useNavigate();

    const handleFirstOptionChange = (e) => {
        e.preventDefault(); 
        setFirstOption(e.target.value);
    }

    const handleSecondOptionChange = (e) => {
        e.preventDefault(); 
        setSecondOption(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let question = {
            optionOneText : firstOption, 
            optionTwoText : secondOption, 
            author : loginUser,
        }

        dispatch(handleCreateQuestion(question , () => {
            setFirstOption('');
            setSecondOption('');
            navigate('/')
        }));
        
    }

    return (
        <div className="NewQuestion">
            <form className="myForm" onSubmit={handleSubmit}>
                <h3>Would you Rather</h3>
                <h5>Create Your Own Pool</h5>
                <p>First Option</p>
                <input type='text' value={firstOption} onChange = {handleFirstOptionChange} />
                <p>Second Option</p>
                <input type='text'  value={secondOption} onChange = {handleSecondOptionChange}/>

                <button type = "submit" disabled = {firstOption == '' || secondOption == ''}>Submit</button>
            </form>
        </div>
    );
}

export default connect(({loginUser}) => {
    return {
        loginUser,
    }
})(NewQuestion); 