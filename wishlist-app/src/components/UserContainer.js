import React from 'react'



const UserContainer = props => {
  console.log(props.currentUser)
  let { name, username } = props.currentUser;

 



  return (
      <div className="user-info-card">
        <h3>{name}</h3>
        <div>Username: {username}</div>
        <button>Edit Profile</button>
        <button onClick={props.handleDelete}>Delete Profile</button>
      
      </div>
    )
}

export default UserContainer