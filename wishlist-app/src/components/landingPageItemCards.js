import React from 'react';

const ItemCard = props => {
    let { img_url, name} = props;

    function getRandomInt() {
        let min = Math.ceil(900);
        let max = Math.floor(3000);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

    return (
        <div className="item-card">
            <img src={img_url} alt={name} />
            <h3>{name}</h3>
            {getRandomInt()} users added {name} to their list.
        </div>
    )
}

export default ItemCard;