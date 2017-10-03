import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div className='page'>
        <div className='navbar navbar-inverse'>
          <div className='container'>
            <Link to='/' className="navbar-brand">
              The Baseball Jedi
            </Link>
            <Navigation />    
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Logo}/>
          <Route path='/MajorLeague' component={StadiumMap}/>
          <Route path='/ProspectWatch' component={StadiumMap}/>
          <Route path='/FantasyBaseball' component={StadiumMap}/>
          <Route path='/Stadiums' component={StadiumMap}/>
        </Switch>
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
        <li><Link to='/MajorLeague'>MLB</Link></li>
        <li><Link to='/ProspectWatch'>Prospect Watch</Link></li>
        <li><Link to='/FantasyBaseball'>Fantasy Baseball</Link></li>
        <li><Link to='/Stadiums'>Stadiums</Link></li>
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
