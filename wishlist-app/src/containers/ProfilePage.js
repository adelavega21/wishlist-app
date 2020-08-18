import React from 'react';
import UserContainer from '../components/UserContainer';
import WishlistContainer from './WishlistContainer';
import AddWishlistForm from '../components/AddWishlistForm';
// import { Route, Switch } from 'react-router-dom';

// const WISHLIST_API = 'http://localhost:3000/api/v1/wishlists'

class ProfilePage extends React.Component {
    state = {
        filteredWishlists: []
    }
    
    componentDidMount(){
        this.filterUserWishlists()
    }
    
    filterUserWishlists= () => {
        let filteredUserWishlists = this.props.wishlists.filter(wishlist => wishlist.user_id === this.props.currentUser.id)
        this.addfilteredwishlists(filteredUserWishlists)
        
    }
    
    addfilteredwishlists = (wishlists) => {
        console.log(wishlists)
        let filteredAllUserWishlist = [...this.state.filteredWishlists, wishlists]
        this.setState({filteredWishlists: filteredAllUserWishlist[0]})
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
    
        console.log(this.state.filteredWishlists)
        return(
            <div className="profile-page">
                <div id="profile-buttons" ><h3>My Profile</h3>
                <UserContainer currentUser={this.props.currentUser} handleDelete={this.handleDelete} routeToEdit={this.routeToEdit}/></div>
                <div id="user-lists"><h3>Your Lists</h3>
                <>{this.state.filteredWishlists.map(wishlist => <WishlistContainer key={wishlist.id} {...wishlist} setWishlist={this.props.setWishlist} currentUser={this.props.currentUser}/>)} </><br/>
                <AddWishlistForm addNewWishList={this.props.addNewWishList}/></div>
            </div>
        )
    }
}

export default ProfilePage;