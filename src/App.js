import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <ul className='nav nav-tabs'>
            <li><a href='/'>MLB</a></li>
            <li><a href='/'>Prospect Watch</a></li>
            <li><a href='/'>Fantasy Baseball</a></li>
            <li><a href='/'>Stadiums</a></li>
          </ul>
        </div>

        <div className='container'>
          <a href='/' className="App-intro navbar-brand">
            The Baseball Jedi
          </a>
        </div>

      </div>
    );
  }
}



export default App;
