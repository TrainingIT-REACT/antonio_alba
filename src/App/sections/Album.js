import React from "react";

const Album = props => (
  <div className="section album">
    <h2 className="album-title">Album Name</h2>
    <ul className="album-list">
      <li>
        <h4 className="song-title">Song title</h4>
        <h5 className="song-artist">Artist</h5>
      </li>
      <li>
        <h4 className="song-title">Song title</h4>
        <h5 className="song-artist">Artist</h5>
      </li>
      <li>
        <h4 className="song-title">Song title</h4>
        <h5 className="song-artist">Artist</h5>
      </li>
      <li>
        <h4 className="song-title">Song title</h4>
        <h5 className="song-artist">Artist</h5>
      </li>
    </ul>
  </div>
);

export default Album;
