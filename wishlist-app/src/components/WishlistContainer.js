import React from 'react'

const WISHLIST_API = 'http://localhost:3000/api/v1/wishlists'

class WishlistContainer extends React.Component {

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


  render(){
    console.log(this.state.wishlists)
    return (
      <div className="wishlists-card">
       wishlist
      </div>
    )
  }
}

export default WishlistContainer