import React from "react";
import { NavLink } from "react-router-dom";

const Library = props => (
  <div className="section library">
    <h2>Albums</h2>
    <ul className="albums-list albums-list-horizontal">
      <li>
        <NavLink className="album-link" to="/library/album/sample">
          <span className="ply-btn ply-play">Play</span>
          <img src="/img/icons/photo-camera.svg" alt="" />
          <span className="album-title">Lorem ipsum</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="album-link" to="/library/album/sample">
          <span className="ply-btn ply-play">Play</span>
          <img src="/img/icons/photo-camera.svg" alt="" />
          <span className="album-title">Lorem ipsum</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="album-link" to="/library/album/sample">
          <span className="ply-btn ply-play">Play</span>
          <img src="/img/icons/photo-camera.svg" alt="" />
          <span className="album-title">Lorem ipsum</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="album-link" to="/library/album/sample">
          <span className="ply-btn ply-play">Play</span>
          <img src="/img/icons/photo-camera.svg" alt="" />
          <span className="album-title">Lorem ipsum</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="album-link" to="/library/album/sample">
          <span className="ply-btn ply-play">Play</span>
          <img src="/img/icons/photo-camera.svg" alt="" />
          <span className="album-title">Lorem ipsum</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Library;
