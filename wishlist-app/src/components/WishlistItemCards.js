import React from 'react';

const ItemCard = props => {
    let { img_url, name, category, price } = props;


    return (
        <div className="item-card">
            <img src={img_url} alt={name} />
            <h3>{name}</h3>
            <div>Category: {category}</div>
            <div>Price: ${price}</div>
            <div>Buy Link </div>
        </div>
    )
}

export default ItemCard;