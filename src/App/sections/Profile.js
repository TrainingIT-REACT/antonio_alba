import React, { Component } from "react";

const Profile = props => (
  <div className="section profile">
    <div className="profile-avatar">
      <img src="/img/icons/photo-camera.svg" className="" alt="Profile image" />
    </div>

    <h2 className="profile-username">Username</h2>

    <ul className="profile-actions">
      <li>
        - <a href="#">logout</a> -
      </li>
    </ul>


  </div>
);

export default Profile;
