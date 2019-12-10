import React, { PureComponent } from 'react';
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

// Action creators
import * as historyActions from './actions/history';
import * as userActions from './actions/user';


// Sample Redux:
const unsubscribe = store.subscribe(() => {
  if (store.getState().user.name != null) {
    console.log(`${store.getState().user.name} ha modificado la lista de TODOs`);
    console.log(store.getState().history);
  } else {
    console.log(store.getState());
  }
});
store.dispatch(userActions.updateName('Jesús'));
store.dispatch(historyActions.addSong('Dormir'));
store.dispatch(historyActions.addSong('Salir a pasear'));
store.dispatch(historyActions.addSong('Volver a dormir'));
store.dispatch(historyActions.listenSong(0));
store.dispatch(historyActions.listenSong(1));
store.dispatch(historyActions.listenSong(2));
unsubscribe();


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: [],
      signedIn: false,
      updateUser: this.updateUser,
    }
  }

  updateUser = (signedIn) => {
    this.setState(() => ({ signedIn }));
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
        <React.StrictMode>
          <UserContext.Provider value={this.state}>
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
                      <Route path="/library/album/:name([a-zA-Z]*)" component={Album}/>
                      <PrivateRoute path="/user" exact component={Profile} updateUser={this.updateUser} />
                      <Route path="/user/login" exact
                        render={(props) => <Login {...props} updateUser={this.updateUser} />} />
                      <Route path="/" exact component={Home}/>
                      <Route component={NotFound}/>
                    </Switch>
                  </React.Suspense>
                </ErrorBoundary>
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
          </UserContext.Provider>
        </React.StrictMode>
      </Router>
    );
  }
}

export default App;
