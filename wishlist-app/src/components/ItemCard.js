import React from 'react';

const ItemCard = props => {
    let { img_url, name, price, category } = props;

    return (
        <div className="item-card">
            <img src={img_url} alt={name} />
            <h3>{name}</h3>
            <div>Category: {category}</div>
            <div>Price: ${price}</div>
            <button>Add to Wishlist!</button>
        </div>
    )
}

export default ItemCard;