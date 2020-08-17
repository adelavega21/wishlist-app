import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import ItemIndex from './ItemIndex';
import ProfilePage from './ProfilePage';
import EditProfile from '../components/EditProfile'




const ITEMS_API = 'http://localhost:3000/api/v1/items'

class App extends React.Component {
  state = {
    items: [],
    currentUser: null
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


  componentDidMount() {
    this.getFirstApiCall();
    this.getSecondApiCall();
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.user_id = user.id
      this.props.history.push("/profile")  
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


  render(){
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} removeUserState={this.removeUserState}/>
        <img src="https://i.imgur.com/jEVEOA6.png" alt="logo" className="logo" /><br /><br /><br />
        <Switch>
          <Route path="/profile" render={(routerProps) => <ProfilePage currentUser={this.state.currentUser} removeUserState={this.removeUserState} {...routerProps}/>}/>
          <Route path="/items" render={(routerProps) => <ItemIndex items={this.state.items} {...routerProps}/>}/>
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