import React from 'react';
import UserContainer from '../components/UserContainer';
import WishlistContainer from '../components/WishlistContainer';
import AddWishlistForm from '../components/AddWishlistForm';

class ProfilePage extends React.Component {
   

    render() {

    
        return(
            <div className="profile-page">
                <h3>My Profile</h3>
                <UserContainer currentUser={this.props.currentUser}/>
                <WishlistContainer currentUser={this.props.currentUser}/>
                <AddWishlistForm />
            </div>
        )
    }
}

export default ProfilePage;