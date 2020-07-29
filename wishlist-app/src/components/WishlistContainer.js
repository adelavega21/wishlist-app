import React from 'react'



class WishlistContainer extends React.Component {



  // getUsersWishlists = () => {
  //   this.state.wishlists.map(wishlist => {
  //     if (wishlist.user_id === localStorage.user_id)
      
  //   })
  // }


  render(){
    console.log(this.props)
    return (
      <div className="wishlists-card">
       {this.props.title}
      </div>
    )
  }
}

export default WishlistContainer