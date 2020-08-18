import React from 'react'
import { Link } from 'react-router-dom';




class WishlistContainer extends React.Component {
  clickHandler = (e) => {
    this.props.setWishlist(this.props)
  }

  render(){
    return (
      <div className="wishlists-card">
        <Link to={`/wishlists/${this.props.id}`} onClick={this.clickHandler}>{this.props.title}</Link>
      </div>
    )
  }
}

export default WishlistContainer