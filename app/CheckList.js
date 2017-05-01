import React, { Component } from 'react';
import {render} from 'react-dom';

export default class CheckList extends Component {

  getTasks(taskList){
    var tasks = taskList.map((task, index) => {
        return (
            <div key={`tasks-index-${index}`}>
                <input type="checkbox" defaultChecked={task.done} /> {task.name}
            </div>
        );
    });
    return tasks;
  }
  
  render(){
    return (
        <div>
            {this.getTasks(this.props.tasks)}
        </div>
    );
  }
}
