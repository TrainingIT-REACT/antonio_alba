import types from './types';

const albumsLoading = () => ({
  type: types.ALBUMS_LOADING,
});

const albumsError = () => ({
  type: types.ALBUMS_ERROR
});

const albumsLoaded = (albums) => ({
  type: types.ALBUMS_LOADED,
  albums
})

export const getAlbums = () => async (dispatch) => {
  dispatch(albumsLoading());
  try {
    const res = await fetch('http://localhost:3001/albums');
    const json = await res.json();
    console.log('json', json);
    dispatch(albumsLoaded(json));
  } catch {
    dispatch(albumsError());
  }
};
