import {
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_SUCCESS,
} from "../constants/search.constant";
import axios from "axios";

const searchMovieStart = () => {
  return {
    type: SEARCH_MOVIE_START,
  };
};

const searchMovieSuccess = (result) => {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    payload: result,
  };
};

const searchMovieFailure = (err) => {
  return {
    type: SEARCH_MOVIE_FAILURE,
    payload: err,
  };
};

export const asyncSearchMovie = (searchStr) => {
  return async (dispatch) => {
    dispatch(searchMovieStart());
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=46fbd66e&s=${searchStr}`
      );

      if (data.Error) {
        return dispatch(searchMovieFailure(data.Error));
      }

      dispatch(searchMovieSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(searchMovieFailure(err));
    }
  };
};
