import React from "react";
import AlbumsContainer from "../components/AlbumsContainer";

const Home = props => (
  <div className="section home">
    <h3>Recommended for you</h3>
    <AlbumsContainer
      type="recommended" />
    <h3>Latest releases</h3>
    <AlbumsContainer
      type="latest" />
  </div>
);

export default Home;
