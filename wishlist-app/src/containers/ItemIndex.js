import React from 'react';
import ItemCard from '../components/ItemCard';
import { Route, Switch } from 'react-router-dom';
// import { render } from '@testing-library/react';


class ItemIndex extends React.Component {
    

    render() {
        let { match, items } = this.props;

        return (
            <div className="item-index">
                <Switch>
                    <Route 
                        exact path={`${match.path}`} 
                        render={() => <> {items.map(item => <ItemCard key={item.id} currentUser={this.props.currentUser} createWishlistItem={this.props.createWishlistItem} {...item} match={this.props.match} push={this.props.history.push} wishlists={this.props.wishlists}/>)} </>}
                    />
                </Switch>
            </div>
        )
    }
}

export default ItemIndex;