import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../Actions/loginUser";

const Navigation = ({user , dispatch}) => {
    const handleLogout = (e) => {
        e.preventDefault(); 
        dispatch(logoutAction());
    }

    return (<div className="Navigation">
        <Link to="/" ><span>Home</span></Link>
        <Link to="/leaderboard" ><span>Leaderboard</span></Link>
        <Link to="/add" ><span>New Question</span></Link>
        <div className="User">
        <img src={user.avatarURL} alt={`Avatar of ${user.id}`} className="navigationAvatar"  />
        <span>{user.id}</span>
        <button onClick={handleLogout}>logout</button>
        </div>

    </div>)
}

export default connect(({loginUser , users}) => {return {
    user : users[loginUser]
}
})(Navigation) ; 