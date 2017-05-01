import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard'

let kanbanData = [
  {
    "id": 1,
    "title": "Card one title",
    "description": "Card detailed description. [github](https://github.com/pro-react)",
    "status": "todo",
    "tasks": [
      {
        "id": 1,
        "name": "Task one",
        "done": true
      },
      {
        "id": 2,
        "name": "Task two",
        "done": false
      },
      {
        "id": 3,
        "name": "Task three",
        "done": false
      }
    ]
  },
  {
    "id": 2,
    "title": "Card one title",
    "description": "Card detailed description. [github](https://github.com/pro-react)",
    "status": "todo",
    "tasks": [
      {
        "id": 1,
        "name": "Task one",
        "done": true
      },
      {
        "id": 2,
        "name": "Task two",
        "done": false
      },
      {
        "id": 3,
        "name": "Task three",
        "done": false
      }
    ]
  },
  {
    "id": 2,
    "title": "Card Two title",
    "description": "Card detailed description [github](<a href='https://github.com/pro-react'>Git</a>)",
    "status": "in-progress",
    "tasks": []
  },
  {
    "id": 2-1,
    "title": "Card Two-1 title",
    "description": "Card detailed description [github](https://github.com/pro-react)",
    "status": "in-progress",
    "tasks": []
  },
  {
    "id": 2-2,
    "title": "Card Two-2 title",
    "description": "Card detailed description",
    "status": "in-progress",
    "tasks": []
  },
  {
    "id": 2-3,
    "title": "Card Two-2 title",
    "description": "Card detailed description",
    "status": "in-progress",
    "tasks": []
  },
  {
    "id": 3,
    "title": "Card Three title",
    "description": "Card detailed description",
    "status": "done",
    "tasks": []
  },
{
    "id": 3-1,
    "title": "Card Three title",
    "description": "Card detailed description",
    "status": "done",
    "tasks": []
  },
  {
    "id": 3-2,
    "title": "Card Three title",
    "description": "Card detailed description",
    "status": "done",
    "tasks": []
  },
  {
    "id": 3-3,
    "title": "Card Three title",
    "description": "Card detailed description",
    "status": "done",
    "tasks": []
  }  
];

class App extends Component {
  render(){
    return (
      <div>
        <KanbanBoard cards={kanbanData}/>
      </div>  
    );
  }
}
render(<App />, document.getElementById('root'));