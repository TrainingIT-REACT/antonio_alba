import React from "react";
import AlbumsList from "../components/AlbumsList";

const Library = props => (
  <div className="section library">
    <h2>Albums</h2>
    <AlbumsList
      type="library"
      layout="horizontal" />
  </div>
);

export default Library;
