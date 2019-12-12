import React, { PureComponent } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import UserContext from './contexts/user';
import Album from './sections/Album';
import Library from './sections/Library';
import Login from './sections/Login';
import Home from './sections/Home';
import NotFound from './sections/NotFound';
import Profile from './sections/Profile';
import Search from './sections/Search';
import ErrorBoundary from "./utils/ErrorBoundary";
import PrivateRoute from './utils/PrivateRoute';

// Css
import './App.css';

// Store
import store from './store';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser = (signedIn) => {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <UserContext.Provider value={this.state}>
            <div className="app container">
              <Router>
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
                  <ErrorBoundary
                    message="Ops! Something goes wrong while loading this section..."
                    wrap={true}
                    >
                    { this.state.loading &&
                      <div className="loading-container">
                        <p className="loading-content">Loading...</p>
                      </div>
                    }

                    <React.Suspense fallback="Loading section...">
                      <Switch>
                        <Route path="/search" exact component={Search}/>
                        <Route path="/library" exact component={Library}/>
                        <Route path="/library/album/:name([0-9a-zA-Z]*)" component={Album}/>
                        <PrivateRoute path="/user" exact component={Profile} updateUser={this.updateUser} />
                        <Route path="/user/login" exact
                          render={(props) => <Login {...props} updateUser={this.updateUser} />} />
                        <Route path="/" exact component={Home}/>
                        <Route component={NotFound}/>
                      </Switch>
                    </React.Suspense>

                  </ErrorBoundary>
                </section>
              </Router>
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
          </UserContext.Provider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
