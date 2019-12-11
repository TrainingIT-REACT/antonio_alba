import React from "react";
import AlbumsList from "../components/AlbumsList";

const Home = props => (
  <div className="section home">
    <h3>Recommended for you</h3>
    <AlbumsList
      type="recommended" />
    <h3>Latest releases</h3>
    <AlbumsList
      type="latest" />
  </div>
);

export default Home;
