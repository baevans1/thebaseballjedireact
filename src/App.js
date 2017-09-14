import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className='page'>
        <div className='navbar navbar-inverse'>
          <div className='container'>
            <a href='/' className="navbar-brand">
              The Baseball Jedi
            </a>
            <Navigation />

          </div>
        </div>
        <Logo />
        <StadiumMap />
      </div>
    );
  }
}
class Logo extends Component {
  render() {
    return (
      <div className='vertical-center'>
        <div className='col-md-4 col-md-offset-4'>
          <h1 className='text-center myHeader'>
            <a href='/'>The Baseball Jedi</a>
          </h1>
        </div>
      </div>
    );
  }
}
class Navigation extends Component {
  render() {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='/'>MLB</a></li>
        <li><a href='/'>Prospect Watch</a></li>
        <li><a href='/'>Fantasy Baseball</a></li>
        <li><a href='/'>Stadiums</a></li>
      </ul>
    );
  }
}
class StadiumMap extends Component {
  render() {
    return (
      <div id='map'></div>
    );
  }
}



export default Header;
