import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/user';

const PrivateRoute = ({ component: Component, ...others }) => {

  return (
    <UserContext.Consumer>
      { ({ signedIn }) => {
        return <Route
                {...others}
                render={(props) =>
            signedIn ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/user/login',
                  state: {
                    message: 'Please log in.'
                  }
                }}
              />
            )
          }
        />
      }}
    </UserContext.Consumer>
  );
}

export default PrivateRoute;