import React, { Component } from 'react';
import {render} from 'react-dom';
import CheckList from './CheckList';
import marked from 'marked';

export default class KanbanCard extends Component {
    
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false,
            showTasks: false
        };
        this.toggleCardDetail = this.toggleCardDetail.bind(this);
        this.toggleTasksDetail = this.toggleTasksDetail.bind(this);
    }    
    
    getCardDetails(){
        let cardDetails;
        if(this.state.showDetails === true){
            cardDetails = (
                <div className="card_details">
                    {this.getTaskDetailButton()}
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}}/>
                    {this.getTasks()}
                </div>
            );
        }
        return cardDetails;
    }
    
    getTaskDetailButton(){
        let taskDetailButton;
        if(this.props.tasks.length > 0){
            taskDetailButton = (<button onClick={this.toggleTasksDetail}>{ this.state.showTasks ? 'Hide Tasks' : 'Show Tasks' }</button>);
        }
        return taskDetailButton;
    }
    
    getTasks(){
        let taskList;
        if(this.state.showTasks === true){
            taskList = (
                <CheckList cardId={this.props.id} tasks={this.props.tasks} />
            );
        }
        return taskList;
    }
    
    toggleCardDetail(){
        this.setState({showDetails: !this.state.showDetails})        
    }
    
    toggleTasksDetail(){
        this.setState({showTasks: !this.state.showTasks})        
    }
    
    toggleFolderIcon(){
        return (this.state.showDetails) ? '-' : '+';
    }
    
    render(){
        return (
          <div>
            <h2 className="col-md-12" onClick={this.toggleCardDetail}>{this.toggleFolderIcon()}{this.props.title}</h2>
                {this.getCardDetails()}
          </div>
        );
  }
}

