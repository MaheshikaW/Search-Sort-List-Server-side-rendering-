import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div>
            <Navbar />
            Homepage</div>
      );
    }
  }