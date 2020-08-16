// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = props => {
//     return (
//         <div className="navbar">
//             <Link to="/">Home</Link>
//             <Link to="/items">Items</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//         </div>
//     )
// }

// export default Navbar;


import React from 'react'
// import Home from '../components/Home'
import UserControls from '../components/UserControls'
// import ItemIndex from '../components/ItemIndex'
import { Link } from 'react-router-dom';


function NavBar(props){
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/items">Items</Link>
      {props.currentUser? <Link to="/profile">Profile</Link>:null}
      <UserControls removeUserState={props.removeUserState} currentUser={props.currentUser} />
    </div>
  )
}

export default NavBar