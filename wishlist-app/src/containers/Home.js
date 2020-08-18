import React from 'react';
import ItemCard from '../components/SplashPageItemCards';
// import { Route, Switch } from 'react-router-dom';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Home extends React.Component{
  
  
  
  render() {
    const shuffleItems = shuffleArray(this.props.items)
    const popularItems = shuffleItems.slice(7,19)
    return (<>
        <div className="home-button">
          <h3>Todays Most Popular Items:</h3>
          {/* {props.items.map(item => <ItemCard item={item}/>)} */}
        </div>
        <div className="item-index">
                {popularItems.map(item => <ItemCard key={item.id} {...item}/>)}
        </div>
      </>)

  }

}

export default Home




