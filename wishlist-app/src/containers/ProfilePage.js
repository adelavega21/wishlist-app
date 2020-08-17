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
        .then(wishlistArray => {
            let userWishlists = wishlistArray.filter(list => list.user_id === this.props.currentUser.id)
            this.setState({ wishlists: userWishlists })
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

    addNewWishList=(list)=>{
        const newListArray = [...this.state.wishlists, list]
        this.setState({
            wishlists: newListArray
        })
    }


   

    render() {
       console.log(this.state.wishlists)
    
        return(
            <div className="profile-page">
                <div id="profile-buttons" ><h3>My Profile</h3>
                <UserContainer currentUser={this.props.currentUser} handleDelete={this.handleDelete} routeToEdit={this.routeToEdit}/></div>
                <div id="user-lists"><h3>Your Lists</h3>
                <>{this.state.wishlists.map(wishlist => <WishlistContainer key={wishlist.id} {...wishlist} currentUser={this.props.currentUser}/>)} </><br/>
                <AddWishlistForm addList={this.addNewWishList}/></div>
            </div>
        )
    }
}

export default ProfilePage;