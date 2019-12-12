import types from '../actions/types';

const initialState = {
  isLoading: false,
  albums: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALBUMS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.ALBUMS_LOADED:
      return {
        ...state,
        isLoading: false,
        albums: action.albums,
        error: false
      }
    case types.ALBUMS_ERROR:
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
