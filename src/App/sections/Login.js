import React, { PureComponent } from "react";
import UserContext from '../contexts/user';
import { NavLink } from "react-router-dom";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.inputUsernameRef = React.createRef();
  }

  componentDidMount() {
    this.inputUsernameRef.current.focus();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;

    return (
    <UserContext.Consumer>
      {({ signedIn, updateUser }) => {
        return <>
              <div className="section login">
                <h1>Reactify</h1>
                {
                  signedIn ? (
                    <div className="text-center">
                      <p>Successfully logged in.</p>
                      <p>
                        [ <NavLink
                          to="/user">Go to Profile</NavLink> ]
                      </p>
                    </div>
                  ) : (
                    <>
                      {
                        (this.props.location.state && this.props.location.state.message) &&
                        <p className="text-center">
                          { this.props.location.state.message }
                        </p>
                      }
                      {
                        //<form className="login-form" onSubmit={this.onSubmit}>
                      }
                      <form
                        className="login-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          updateUser(true);
                        }}
                        >
                        <input
                          name="username"
                          type="text"
                          value={username}
                          onChange={this.onChange}
                          ref={this.inputUsernameRef}
                          placeholder="Type your email or username" />
                        <input
                          name="password"
                          type="password"
                          value={password}
                          onChange={this.onChange}
                          placeholder="Type your password" />

                        <button type="submit">LOGIN</button>
                      </form>
                    </>
                  )
                }
              </div>
            </>
        }
      }
    </UserContext.Consumer>
    );
  }
}

export default Login;
