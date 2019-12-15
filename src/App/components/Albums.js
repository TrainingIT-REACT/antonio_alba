import React from 'react';
import { NavLink } from "react-router-dom";

const Albums = ({ albums, type, layout = '', keywords = '' }) => {
  let albumsFilter = [];
  let layoutClass = '';

  const searching = (album) => {
    return album.name.toLowerCase().indexOf(keywords.toLowerCase()) >= 0
      || album.artist.toLowerCase().indexOf(keywords.toLowerCase()) >= 0;
  };

  // Hardcoded switch cases to simulate different scenarios:
  switch (type) {
    case 'search':
      albumsFilter = albums.albums.filter(searching);
      break;
    case 'recommended':
      albumsFilter = albums.albums.slice(0, 5);
      break;
    case 'latest':
      albumsFilter = albums.albums.slice(5);
      break;
    default:
      albumsFilter = albums.albums.slice(3, 8);
      break;
  }

  // Different layouts
  switch (layout) {
    case 'horizontal':
        layoutClass = 'albums-list-horizontal';
      break;
  }

  return <ul className={`albums-list ${layoutClass}`}>
    { albumsFilter.length && albumsFilter.map((album) => (
      <li key={album.id}>
        <NavLink className="album-link" to={`/library/album/${album.id}`}>
          { layout == 'horizontal' &&
          <span className="ply-btn ply-play">Play</span>
          }
          <img src={album.cover || '/img/icons/photo-camera.svg'} alt={album.name} />
          <h4 className="album-title">{album.name}</h4>
          <h6 className="album-artist">{album.artist}</h6>
        </NavLink>
      </li>
      ))
      ||
      <li className="no-results">No albums with this criteria</li>
    }
  </ul>
}

export default Albums;
