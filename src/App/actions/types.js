const actions = [
  "SONGS_LOADING",
  "SONGS_LOADED",
  "SONGS_ERROR",
  "ALBUMS_LOADING",
  "ALBUMS_LOADED",
  "ALBUMS_ERROR",
  "ADD_SONG",
  "LISTEN_SONG",
  "UPDATE_NAME"
];

const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
