import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MapContainer from './MapContainer.js';

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
          <Route path='/MajorLeague' component={MajorLeague}/>
          <Route path='/ProspectWatch' component={ProspectWatch}/>
          <Route path='/FantasyBaseball' component={FantasyBaseball}/>
          <Route path='/Stadiums' component={StadiumMap}/>
          <Route path='/Admin' component={Admin}/>
          <Route path='/BlogEntry' component={BlogPosts}/>
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
      // <div id='map'></div>
      <MapContainer />
    );
  }
}

class Admin extends Component {
  render() {
    return (
      <NameForm />
    );
  }
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-4 col-md-offset-4">
            <label>
              Login:
              <input className="form-control" type="name" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <label>
              Password:
              <input className="form-control" type="Password" value={this.state.value} onChange={this.handleChange} />
            </label>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

class BlogForm extends Component {
    render() {
      return (
        <div className="form-group">
          <form className="blog-form" onSubmit={this._handleSubmit.bind(this)}>
            <label>Enter a new post!</label>
            <div className="blog-form-fields">
              <input className="form-control" placeholder="Name:" ref={(input) => this._author = input}/>
              <textarea className="form-control" placeholder="Start Blogging:" ref= {(textarea) => this._body= textarea}>
              </textarea>
            </div>
            <div className="blog-form-actions">
              <button type='submit'>
                Post Blog
              </button>
            </div>
          </form>
        </div>
      );
    }
    _handleSubmit(event){
      event.preventDefault();
      let author = this._author;
      let body = this._body;
      this.props.addPost(author.value, body.value);
    }
}

//the place that holds the posts indiviually aka comment-box
class BlogPosts extends Component {
  constructor(){
    super();
    this.state = {
      showPosts: false,
      blogPosts: [
        {id: 1, author: "Lip Evans", body: "Lorem ipsum solor det..."},
        {id: 2, author: "Beth Evans", body: "Storthen gort mudger..."}
      ]
    };
  }
  render() {
    const posts =this._getPosts();
    let blogNodes;
    let buttonText = 'Show Posts';
    if(this.state.showPosts) {
      blogNodes = <div className="blog-list">{posts}</div>
      buttonText = 'Hide Posts';
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <BlogForm addPost={this._addComment.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {blogNodes}
      </div>
    );
  }
  _addComment(author, body) {
      const newPost = {
        id: this.state.blogPosts.length +1,
        author,
        body
      };
      this.setState({ posts: this.state.blogPosts.concat([newPost]) });
  }
  _getPosts(){

      return this.state.blogPosts.map((post) => {
        return(
          <BlogEntry
          author={post.author}
          body={post.body}
          key={post.id} />)
      });
    }
  _handleClick() {
    this.setState({
      showPosts: !this.state.showPosts
    });
  }

}
//the posts themselves aka comments
class BlogEntry extends React.Component {
  render() {
    return (
      <div className="title">
        <p className="author">{this.props.author}</p>
        <p className="blog-body">{this.props.body}</p>
        <div className="blog-footer">
          <a href= "#" className="blog-footer-delete">
          Delete Comment
          </a>
        </div>
      </div>
    );
  }

}


class MajorLeague extends Component {
  render () {
    return (
      <div>
        <div>
          <h3>Hot Hitters</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Secondmost Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Older Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>A Little Older Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}
class FantasyBaseball extends Component {
  render () {
    return (
      <div>
        <div>
          <h3>The Trade Off</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Secondmost Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Older Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>A Little Older Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}
class ProspectWatch extends Component {
  render () {
    return (
      <div>
        <div>
          <h3>Heading to Colorado</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Secondmost Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Older Recent Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>A Little Older Article</h3>
          <p>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut
           aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore
           eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia
           deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default Header;
