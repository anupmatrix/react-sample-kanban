import React, {Component}  from 'react';
import ListItem from './ListItem'

export default class GroceryList extends Component{
    render(){
        return(
            <ul>
                <ListItem quantity="1"  name="Bread"                        price_per_unit="100"/>
                <ListItem quantity="6"  name="Egg 6 piece pack"             price_per_unit="200" />
                <ListItem quantity="10" name="Golden brown Bread 120gm "    price_per_unit="50"/>
                <ListItem quantity="5"  name="Thums up 500ml plastic bottle" price_per_unit="80"/>
            </ul>
        )
    }
}

