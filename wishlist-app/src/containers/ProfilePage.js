import React from 'react';
import UserContainer from '../components/UserContainer';
import WishlistContainer from '../components/WishlistContainer';
import AddWishlistForm from '../components/AddWishlistForm';

class ProfilePage extends React.Component {
    
    handleDelete = event => {
        // console.log(localStorage.user_id)
        fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        
        }) 
        // this.props.history.push("/login")
        this.props.removeUserState()
    }
   

    render() {

    
        return(
            <div className="profile-page">
                <h3>My Profile</h3>
                <UserContainer currentUser={this.props.currentUser} handleDelete={this.handleDelete}/>
                <WishlistContainer currentUser={this.props.currentUser}/>
                <AddWishlistForm />
            </div>
        )
    }
}

export default ProfilePage;