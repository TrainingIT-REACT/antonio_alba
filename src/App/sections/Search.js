import React from "react";
import { NavLink } from "react-router-dom";

const Search = props => (
  <div className="section search">
    <input type="text" className="input-search" placeholder="Type your artist, album, song,..." />

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

export default Search;
