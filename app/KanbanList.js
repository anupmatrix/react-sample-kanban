import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanCard from './KanbanCard'

export default class KanbanList extends Component {
  render(){
    var cards = this.props.cards.map((card,index) => {
        return <KanbanCard id = {card.id}
                    title = {card.title}
                    description = {card.description}
                    tasks = {card.tasks}
                    key = {`KanbanCard-i-${index}`}
                />
    });
    return (
      <div className="col-md-4">
        <h2 className="bg-primary">{this.props.title}</h2>
        {cards}
      </div>
    );
  }
}



