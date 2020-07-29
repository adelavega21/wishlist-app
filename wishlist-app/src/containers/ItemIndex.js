import React from 'react';
import ItemCard from '../components/ItemCard';
import { Route, Switch } from 'react-router-dom';

const ItemIndex = props => {
    let { match, items } = props;
    return (
        <div className="item-index">
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {items.map(item => <ItemCard key={item.id} {...item} match={props.match} push={props.history.push}/>)} </>}
                />
            </Switch>
        </div>
    )
}

export default ItemIndex;