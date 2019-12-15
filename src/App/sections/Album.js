import React from "react";
import AlbumContainer from "../components/AlbumContainer";

const Album = props => (
  <div className="section album">
    <AlbumContainer
      albumId={props.match.params.id} />
  </div>
);

export default Album;
