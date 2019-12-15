import types from '../actions/types';

const initialState = {
  isLoading: false,
  songs: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SONGS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.SONGS_LOADED:
      return {
        ...state,
        isLoading: false,
        songs: action.songs,
        error: false
      }
    case types.SONGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;
