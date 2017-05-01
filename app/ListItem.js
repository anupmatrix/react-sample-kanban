import React, {Component}  from 'react';

export default class ListItem extends Component {
    render (){
        return (
            <li>{this.props.name} | {this.props.quantity} | {this.props.price_per_unit} = {this.props.quantity * this.props.price_per_unit}</li>
        )
    }
}

