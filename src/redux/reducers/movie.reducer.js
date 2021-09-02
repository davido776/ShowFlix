import {
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  REMOVE_MOVIE,
} from "../constants/movie.constant";

const initState = {
  isGettingMovie: false,
  getMovieError: null,
  movie: null,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIE_START:
      return {
        ...state,
        isGettingMovie: true,
        movie: null,
        getMovieError: null,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isGettingMovie: false,
        movie: action.payload,
        getMovieError: null,
      };
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        isGettingMovie: false,
        movie: null,
        getMovieError: action.payload,
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        isGettingMovie: null,
        movie: null,
        getMovieError: null,
      };
    default:
      return state;
  }
};

export default movieReducer;
