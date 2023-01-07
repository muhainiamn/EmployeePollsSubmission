import { connect } from "react-redux";


const Leaderboard = ({users}) => {
    return (
    <div className="leaderboard">
        <table>
            <tbody>
            <tr>
             <th>users</th>
             <th>Answered</th>
             <th>Created</th>

            </tr>

            {users.map(user => {
                return (<tr key={user.id}>
                    <td>
                        <div>
                        <img src={user.avatarURL} alt={`Avatar of ${user.id}`} className="miniAvatar"  />
                        <span>{user.name}</span><br />
                        <span className="miniText">{user.id}</span>
                        </div>
                    </td>
                    <td>{Object.keys(user.answers).length}</td>
                    <td>{Object.keys(user.questions).length}</td>


   
               </tr>)
            })}
            </tbody>
        </table>
    </div>
    )
}

export default connect(({users}) => {
    let usersArray = []; 
    for (var key of Object.keys(users)) {
        usersArray.push(users[key]);
    }

    usersArray.sort((a , b) => {
        return (Object.keys(b.answers).length + Object.keys(b.questions).length) - (Object.keys(a.answers).length + Object.keys(a.questions).length);
    })
    return {
        users : usersArray,
    }
})(Leaderboard); 