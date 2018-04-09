import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css'
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() { 
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/list">Password List</a>
          </div>
        </div>
        <div>
          <Link to="/">
          <button className="btn btn-primary">Login/Register</button>
          </Link>
        </div>
      </nav>
  )
  }
}
 
export default Navbar ;