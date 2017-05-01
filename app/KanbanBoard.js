import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanList from './KanbanList'

export default class KanbanBoard extends Component {
  render(){
    //var cards = this.props.cards.filter((card) => card.status === 'in-progress');
    return (
      <div>
        <div className = "row">    
            <KanbanList id='klist-to-do' title="To DO" cards={this.props.cards.filter((card) => card.status === 'todo')} />
            <KanbanList id='klist-in-progress' title="In Progress" inProgress="In Progress" cards={this.props.cards.filter((card) => card.status === 'in-progress')} />
            <KanbanList id='klist-done' title="Done" done="Done" cards={this.props.cards.filter((card) => card.status === 'done')} />
        </div>
      </div>
    );
  }
}



