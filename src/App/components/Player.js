import React from "react";

const Player = props => (
  <div className="player-footer">
    <div className="player-controls">
      <span className="ply-btn ply-play">Play / Pause</span>
    </div>
    <p className="player-nowplaying">
      <span className="player-song">Song</span>
      <b> · </b>
      <span className="player-artist">Artist</span>
      <b> · </b>
      <span className="player-album">Album</span>
    </p>
  </div>
);

export default Player;
