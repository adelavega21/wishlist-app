import React from 'react'

class AddWishlistForm extends React.Component {
  state = {
    title: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/wishlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({title: this.state.title, user_id: localStorage.user_id})
    })
    .then(res => res.json())
    .then(list => this.props.addNewWishList(list))

  }


  render(){
    return (
      <div className="wishlists-card" onSubmit={this.handleSubmit}>
        <form className="new-wishlist-form">
          <input id="list-namer" name="title" value={this.state.title} onChange={this.handleChange}placeholder="Wishlist Title"/><br/>
          <button>Create New Wishlist</button>
        </form>
      </div>
    )
  }
}

export default AddWishlistForm