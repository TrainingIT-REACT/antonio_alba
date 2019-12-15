import React from 'react';

const Album = ({ albums, songs, type }) => {
  let albumsFilter = [];
  let albumSongs = [];

  const filterAlbum = (album) => {
    return album.id == type;
  };

  const filterSongs = (song) => {
    return song.album_id == type;
  };

  const formatTime = (duration) => {
    return new Date(duration * 1000).toISOString().substr(11, 8);;
  };

  albumsFilter = albums.albums.filter(filterAlbum);
  albumSongs = songs.songs.filter(filterSongs);

  return <>
    { albumsFilter.length && albumsFilter.map((album) => (
      <div className="album-detail" key={album.id}>
        <div className="album-cover-container">
          <img src={album.cover || '/img/icons/photo-camera.svg'} alt={album.name} />
          <h2 className="album-title">{album.name}</h2>
        </div>
        <ul className="album-list">
          { albumSongs.length && albumSongs.map((song) => (
            <li key={song.id}>
              <h6 className="song-duration">{formatTime(song.seconds)}</h6>
              <h4 className="song-title">{song.name}</h4>
              <h5 className="song-artist">{album.artist}</h5>
            </li>
            ))
            ||
            <li className="no-results">No songs in this album</li>
          }
        </ul>
      </div>
      ))
      ||
      <p className="no-results">No albums with this criteria</p>
    }
  </>
}

export default Album;
