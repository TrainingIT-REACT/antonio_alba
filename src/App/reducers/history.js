import types from '../actions/types';

const initialState = {
  history: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SONG:
      return {
        history: [
          ...state.history, {
            song: action.song,
            complete: false,
          }
        ]
      };
    case types.LISTEN_SONG:
      return {
        history: [
          ...state.history.slice(0, action.index),
          {
            ...state.history[action.index],
            complete: true,
          },
          ...state.history.slice(action.index + 1)
        ]
      }
    default:
      return state;
  }
}

export default reducer;
