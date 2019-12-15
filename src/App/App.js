import React, { PureComponent } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from './contexts/user';
import NavBar from './components/Navbar';
import Player from './components/Player';
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
                <NavBar />
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
                        <Route path="/library/album/:id([0-9a-zA-Z]*)" component={Album}/>
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
              <Player />
            </div>
          </UserContext.Provider>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App;
