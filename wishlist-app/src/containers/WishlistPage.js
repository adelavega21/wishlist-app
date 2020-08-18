import React from 'react'
import ItemCard from '../components/WishlistItemCards'

class WishlistPage extends React.Component {

    state ={
        userWishlistItems: [],
        allSavedWishlistItemsArr: [],
        finalItemsArr: []
    }

    componentDidMount() {
        this.getSpecificWishlistItems()
    }

    getSpecificWishlistItems = () => {
        let arrOfUserWishlistItems = this.props.wishlistItems.filter(wishlistItem => wishlistItem.wishlist_id === this.props.currentWishlist.id)
        this.addItemsToUserWishlist(arrOfUserWishlistItems)
    }
    
    addItemsToUserWishlist = (arrOfUserWishlistItems) => {
        let newArrOfUserWishlistItems = [...this.state.userWishlistItems, arrOfUserWishlistItems]
        this.setState({userWishlistItems: newArrOfUserWishlistItems[0]})
        this.getWishlistItemInfo(newArrOfUserWishlistItems[0])
    }
        
    getWishlistItemInfo = (newArrOfUserWishlistItems) => {
        console.log(this.props.currentWishlist)
        let newWishlistItemsArray = []
    
        for (const newWishlistItem of newArrOfUserWishlistItems){
            this.props.savedItems.map(savedItem => {
            if(newWishlistItem.item_id === savedItem.id)
            newWishlistItemsArray.push(savedItem)
        })
            
        }
        console.log(newWishlistItemsArray)
        this.setState({finalItemsArr: newWishlistItemsArray})
    }


    render(){
        console.log(this.state.finalItemsArr)
        return(
            <div>
                <h1>{this.props.currentWishlist.title}</h1>
                <div className='item-index'>
                    {this.state.finalItemsArr.map(item => <ItemCard key={item.id} {...item}/>)}
                </div>
            </div>
        )
    }

}

export default WishlistPage