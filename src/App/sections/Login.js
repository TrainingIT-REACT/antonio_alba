import React, { PureComponent } from "react";

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

  onSubmit = (e) => {
    event.preventDefault();

    return false;
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="section login">
        <h1>Reactify</h1>
        <form className="login-form" onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default Login;
