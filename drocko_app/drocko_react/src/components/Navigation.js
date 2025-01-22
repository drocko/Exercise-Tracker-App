import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <h1> Navigators</h1>
            <Link to="/">Home</Link>

            <Link to="/add-exercise">Create an Exercise</Link>
        </nav>
    );
  }
  

export default Navigation;