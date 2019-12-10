import React, { Component } from "react";
import UserContext from '../contexts/user';

const Profile = ({ location }) => {
  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div className="section profile">
      { signedIn ? (
        <>
          <div className="profile-avatar">
            <img src="/img/icons/photo-camera.svg" className="" alt="Profile image" />
          </div>

          <h2 className="profile-username">Username</h2>
          <button onClick={() => updateUser(false)}>Logout</button>
        </>
        ) : (
          <>
            <h2 className="profile-username">Guest</h2>
          </>
        )
      }
      </div>
    }}
  </UserContext.Consumer>;
}

/*
const Profile = props => (
  <div className="section profile">
    <div className="profile-avatar">
      <img src="/img/icons/photo-camera.svg" className="" alt="Profile image" />
    </div>

    <h2 className="profile-username">Username</h2>
  </div>
);
*/

export default Profile;
