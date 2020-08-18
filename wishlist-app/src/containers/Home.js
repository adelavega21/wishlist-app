
import React from 'react';
import ItemCard from '../components/SplashPageItemCards';
// import { Route, Switch } from 'react-router-dom';

function Home(props){
  
  const popularItems = props.items.slice(7,19)

  return (<>
      <div className="home-button">
        <h3>Todays Most Popular Items:</h3>
        {/* {props.items.map(item => <ItemCard item={item}/>)} */}
        {console.log(props.items)}
      </div>
      <div className="item-index">
              {popularItems.map(item => <ItemCard key={item.id} {...item}/>)}
      </div>
    </>)
}

export default Home




