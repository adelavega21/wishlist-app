import React from 'react';
import UserContainer from '../components/UserContainer';
import WishlistContainer from '../components/WishlistContainer';
import AddWishlistForm from '../components/AddWishlistForm';
// import { Route, Switch } from 'react-router-dom';

const WISHLIST_API = 'http://localhost:3000/api/v1/wishlists'

class ProfilePage extends React.Component {
    state = {
        wishlists: []
    }
    
    componentDidMount(){
        this.getWishlists()
    }
    
    getWishlists = () => {
        fetch(WISHLIST_API)
        .then(r => r.json())
        .then(wishlists => {
          this.setState({ wishlists })
        })
    }


    
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

    routeToEdit = event => {
        this.props.history.push("/edit-profile")
    }


   

    render() {
       console.log(this.state.wishlists)
    
        return(
            <div className="profile-page">
                <h3>My Profile</h3>
                <UserContainer currentUser={this.props.currentUser} handleDelete={this.handleDelete} routeToEdit={this.routeToEdit}/>
                <>{this.state.wishlists.map(wishlist => <WishlistContainer key={wishlist.id} {...wishlist} currentUser={this.props.currentUser}/>)} </>
                <AddWishlistForm />
            </div>
        )
    }
}

export default ProfilePage;