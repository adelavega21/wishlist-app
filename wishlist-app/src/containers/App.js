import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import ItemIndex from './ItemIndex';
import ProfilePage from './ProfilePage';
import EditProfile from '../components/EditProfile'
import WishlistPage from './WishlistPage'





const ITEMS_API = 'http://localhost:3000/api/v1/items'
const WISHLIST_API = 'http://localhost:3000/api/v1/wishlists'

class App extends React.Component {
  state = {
    items: [],
    currentUser: null,
    wishlists: [],
    currentWishlist: null,
    wishlistItems: [],
    savedItems: []
  }

  getFirstApiCall=()=>{
    fetch(ITEMS_API)
    .then(resp => resp.json())
    .then(items => this.setState({ items }))

    console.log(this.state.items)
  }

  getSecondApiCall(){
   let user_id = localStorage.user_id
     
    if (user_id){

     
      fetch("http://localhost:3000/api/v1/auto_login", {
        headers: {
          "Authorization": user_id
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  getWishlists = () => {
    fetch(WISHLIST_API)
    .then(r => r.json())
    .then(wishlistArray => {
        let userWishlists = wishlistArray.filter(list => list.user_id === this.state.currentUser.id)
        this.setState({ wishlists: userWishlists })
    })
    console.log(this.state.wishlists)
  }

  addNewWishList=(list)=>{
    const newListArray = [...this.state.wishlists, list]
    this.setState({
        wishlists: newListArray
    })
  }


  componentDidMount() {
    this.getFirstApiCall();
    this.getSecondApiCall();
    this.getWishlists();
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.user_id = user.id
      this.props.history.push("/profile")  
    })
    
  }

  setWishlist = (wishlist) => {
    this.setState({
      currentWishlist: wishlist
    })
  }

  removeUserState = () => {
    this.props.history.push("/login")
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("user_id")
      
    })
  }
  
  createWishlistItem = (wishlist_id, item_id) => {
      fetch("http://localhost:3000/api/v1/wishlist_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ wishlist_id: wishlist_id, item_id: item_id})
      })
      .then(res => res.json())
      .then(response => {
        this.addNewWishlistItem(response)
        this.setSavedItem(response)
      })
    }

    setSavedItem = (response) => {
      let setSaveItem = this.state.items.filter(item => item.id === response.item_id)
      this.addNewSavedItem(setSaveItem)
    }
    
    addNewSavedItem = (setSaveItem) => {
      let newSavedItemsArr = [...this.state.savedItems, setSaveItem[0]]
      this.setState({savedItems: newSavedItemsArr})
      console.log(this.state.savedItems)
    }

    addNewWishlistItem = (response) => {
      const newWishlistItemArray = [...this.state.wishlistItems, response]
      this.setState({
        wishlistItems: newWishlistItemArray
      })
    }


  render(){
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} removeUserState={this.removeUserState}/>
        <img src="https://i.imgur.com/jEVEOA6.png" alt="logo" className="logo" /><br /><br /><br />
        <Switch>
          <Route path={`/wishlists/:wishlistId`} render={() => <WishlistPage savedItems={this.state.savedItems} wishlistItems={this.state.wishlistItems} currentWishlist={this.state.currentWishlist} wishlists={this.state.wishlists} items={this.state.items}/>}/>
          <Route path="/profile" render={(routerProps) => <ProfilePage currentUser={this.state.currentUser} setWishlist={this.setWishlist} removeUserState={this.removeUserState} wishlists={this.state.wishlists} {...routerProps}/>}/>
          <Route path="/items" render={(routerProps) => <ItemIndex currentUser={this.state.currentUser} createWishlistItem={this.createWishlistItem}items={this.state.items} {...routerProps} wishlists={this.state.wishlists}/>}/>
          <Route path="/login" render={() => <Login setUser={this.setUser}/>}/>
          <Route path="/signup" render={() => <SignUp setUser={this.setUser}/>}/>
          <Route path="/edit-profile" render={() => <EditProfile currentUser={this.state.currentUser} setUser={this.setUser}/>}/>
          <Route exact path="/home" render={()=> <Home items={this.state.items} />}/>
        </Switch>
        <div className="footnote"><span className="legal">&#169;WishList 2020</span></div>
      </div>
    );
  }
}

export default App;