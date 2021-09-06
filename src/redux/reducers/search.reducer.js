import {
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_STRING,
} from "../constants/search.constant";

const INIT_STATE = {
  isSearching: false,
  movies: null,
  searchstring:null,
  searchErrMsg: null,
};

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return {
        ...state,
        movies: null,
        searchErrMsg: null,
        isSearching: true,
      };
    case SEARCH_MOVIE_SUCCESS:
      console.log(action.payload, "PAYLOAD");
      return {
        ...state,
        movies: action.payload,
        searchErrMsg: null,
        isSearching: false,
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        movies: null,
        searchErrMsg: action.payload,
        isSearching: false,
      };
    case SEARCH_STRING:
      return {
        ...state,
        searchstring: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
