import React from 'react';

const Albums = ({ albums }) => {
  return <ul>
    { albums.map((album) => (
      <li key={album.id}>{album.title}</li>
    ))}
  </ul>
}

export default Albums;
