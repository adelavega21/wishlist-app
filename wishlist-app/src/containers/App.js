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

  getFirstApiCall(){
    fetch(ITEMS_API).then(resp => resp.json()).then(items => this.setState({ items }))
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
        <Switch>
          <Route path="/profile" render={(routerProps) => <ProfilePage currentUser={this.state.currentUser} removeUserState={this.removeUserState} {...routerProps}/>}/>
          <Route path="/items" render={(routerProps) => <ItemIndex items={this.state.items} {...routerProps}/>}/>
          <Route path="/login" render={() => <Login setUser={this.setUser}/>}/>
          <Route path="/signup" render={() => <SignUp setUser={this.setUser}/>}/>
          <Route path="/edit-profile" render={() => <EditProfile currentUser={this.state.currentUser} setUser={this.setUser}/>}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;