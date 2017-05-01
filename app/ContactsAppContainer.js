import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';

export default class ContactsAppContainer extends Component{
    constructor() {
        super();
        this.state = {
          concats: []  
        };
    }
    componentDidMount(){
        fetch('./contacts.json');
    }
    
    render(){
        return (<div>AAA</div>)
        
    }
}