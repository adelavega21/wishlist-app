import React from 'react';

class ItemCard extends React.Component {

    state={
        selectedWishlist: null
    }
    
    clickHandler = (e) => {
        e.preventDefault()
        let specificWishlistId = this.props.wishlists.filter(wishlist => this.state.selectedWishlist === wishlist.title)
        this.props.createWishlistItem(specificWishlistId[0].id, this.props.id)
    }

    changeHandler = (e) => {
        console.log(e.target.value)
        this.setState({ selectedWishlist: e.target.value })
    }

    render(){
        let { img_url, name, price, category, wishlists} = this.props;
        
        return (
            <div className="item-card">
                <img src={img_url} alt={name} />
                <h3>{name}</h3>
                <div>Category: {category}</div>
                <div>Price: ${price}</div>
                <select onChange={this.changeHandler} >
                    <option value='placeholder'>--------</option>
                    {wishlists.map(wishlist => <option value={wishlist.title} id={wishlist.id} key={wishlist.id} >{wishlist.title}</option>)}
                </select>
                <button onClick={this.clickHandler}>Add to Wishlist!</button>
            </div>
        )
    }
}

export default ItemCard;