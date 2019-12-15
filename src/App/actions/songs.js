import types from './types';

const songsLoading = () => ({
  type: types.SONGS_LOADING,
});

const songsError = () => ({
  type: types.SONGS_ERROR
});

const songsLoaded = (songs) => ({
  type: types.SONGS_LOADED,
  songs
})

export const getSongs = () => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch('/songs');
    const json = await res.json();

    dispatch(songsLoaded(json));
  } catch {
    dispatch(songsError());
  }
};
