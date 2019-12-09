import React from "react";

const Login = props => (
  <div className="section login">
    <h1>Reactify</h1>
    <form className="login-form">
      <input type="text" name="username" placeholder="Type your email or username" />
      <input type="password" name="password" placeholder="Type your password" />

      <button type="submit">LOGIN</button>
    </form>
  </div>
);

export default Login;
