  
import React from 'react'
import { Link } from 'react-router-dom'

function UserControls(props){
  return (
    <div className="user-controls">
      {props.currentUser? null:<Link to="/login"><button className="login">LOG IN</button></Link>}
      {props.currentUser? null:<Link to="/signup"><button className="signup">SIGN UP</button></Link>}
      {props.currentUser? <button onClick={props.removeUserState}><span role="img" aria-label="user-controls">{ props.currentUser.username } X</span></button>:null}
    </div>
  )
}

export default UserControls