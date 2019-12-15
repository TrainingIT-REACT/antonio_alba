import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
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
);

export default NavBar;
