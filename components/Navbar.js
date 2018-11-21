import React, { Component } from 'react';
import { BrowserRouter as Router,Link,Route } from "react-router-dom"; 



export default class Nav extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div>
              <nav className="navbar navbar-default">
                 
                  <div id="navbar" className="navbar-left">
                      <ul className="nav navbar-nav">
                          <li><Link  to="/home" >Home</Link></li>
                          <li><Link  to="/" >student details</Link></li>
                         
                      </ul>
                  </div>
              </nav>
             <div>{this.props.children}</div> 
          </div>
      )
  }
}

