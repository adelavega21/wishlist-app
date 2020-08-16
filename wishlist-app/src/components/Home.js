
import React from 'react'
import ItemCard from './ItemCard'

function Home(props){
  return (
      <div className="home-button">
        Most Popular Items:
        {/* {props.items.map(item => <ItemCard item={item}/>)} */}
        {console.log(props.items)}
      </div>
    )
}

export default Home


