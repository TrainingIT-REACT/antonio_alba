const actions = [
  "ADD_SONG",
  "LISTEN_SONG",
  "UPDATE_NAME"
];

const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
