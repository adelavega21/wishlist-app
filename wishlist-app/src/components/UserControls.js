  
import React from 'react'
import { Link } from 'react-router-dom'

function UserControls(props){
  return (
    <div className="user-controls">
      <Link to="/login"><button className="login">LOG IN</button></Link>
      <Link to="/signup"><button className="signup">SIGN UP</button></Link>
      <button onClick={props.logout}><span role="img" aria-label="user-controls">{props.currentUser ? props.currentUser.username : "👤"} X</span></button>
    </div>
  )
}

export default UserControls