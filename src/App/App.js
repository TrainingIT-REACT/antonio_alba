import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Album from './sections/Album';
import Library from './sections/Library';
import Login from './sections/Login';
import Home from './sections/Home';
import Profile from './sections/Profile';
import Search from './sections/Search';

// Css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <Router>
        <div className="app container">
          <nav className="app-nav">
            <ul>
              <li>
                <NavLink
                  activeClassName="app-nav-link-active"
                  className="app-nav-link app-nav-home"
                  exact
                  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="app-nav-link-active"
                  className="app-nav-link app-nav-search"
                  to="/search">Search</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="app-nav-link-active"
                  className="app-nav-link app-nav-library"
                  to="/library">Library</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="app-nav-link-active"
                  className="app-nav-link app-nav-profile"
                  to="/user">Profile</NavLink>
              </li>
            </ul>
          </nav>

          <section className="app-section">
            { this.state.loading &&
              <div className="loading-container">
                <p className="loading-content">Loading...</p>
              </div>
            }

            <Route path="/search" exact component={Search}/>
            <Route path="/library" exact component={Library}/>
            <Route path="/library/album/:name([a-zA-Z]*)" component={Album}/>
            <Route path="/user" exact component={Profile}/>
            <Route path="/user/login" exact component={Login}/>
            <Route path="/" exact component={Home}/>
          </section>

          <div className="player-footer">
            <div className="player-controls">
              <span className="ply-btn ply-play">Play</span>
            </div>
            <p className="player-nowplaying">
              <span className="player-song">Song</span>
              <b> · </b>
              <span className="player-artist">Artist</span>
              <b> · </b>
              <span className="player-album">Album</span>
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
