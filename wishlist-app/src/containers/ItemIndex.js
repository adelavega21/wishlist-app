import React from 'react';
import ItemCard from '../components/ItemCard';
import { Route, Switch } from 'react-router-dom';
// import { render } from '@testing-library/react';


class ItemIndex extends React.Component {
    

    render() {
        let { match, items } = this.props;
        
        let shuffledItems = items.sort(() => Math.random() - 0.5)

        return (
            <div className="item-index">
                <Switch>
                    <Route 
                        exact path={`${match.path}`} 
                        render={() => <> {shuffledItems.map(item => <ItemCard key={item.id} currentUser={this.props.currentUser} createWishlistItem={this.props.createWishlistItem} {...item} match={this.props.match} push={this.props.history.push} wishlists={this.props.wishlists}/>)} </>}
                    />
                </Switch>
            </div>
        )
    }
}

export default ItemIndex;