import types from './types';

export const addSong = (song) => ({
  type: types.ADD_SONG,
  complete: false,
  song
});

export const listenSong = (index) => ({
  type: types.LISTEN_SONG,
  index
});
