import React from "react";
import AlbumsContainer from "../components/AlbumsContainer";

const Library = props => (
  <div className="section library">
    <h2>Albums</h2>
    <AlbumsContainer
      type="library"
      layout="horizontal" />
  </div>
);

export default Library;
