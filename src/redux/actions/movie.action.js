import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS,
  REMOVE_MOVIE,
} from "../constants/movie.constant";
import axios from "axios";

const getMovieStart = () => {
  return {
    type: GET_MOVIE_START,
  };
};

const getMovieSuccess = (movie) => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movie,
  };
};

const getMovieFailure = (err) => {
  return {
    type: GET_MOVIE_FAILURE,
    payload: err,
  };
};

export const removeMovie = () => {
  return {
    type: REMOVE_MOVIE,
  };
};

export const asyncGetMovie = (movieId) => {
  return async (dispatch) => {
    dispatch(getMovieStart());
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&y=&plot=short&r=json&apikey=46fbd66e`
    );

    console.log(data, "! MOVIE");

    if (data.Error) {
      return dispatch(getMovieFailure(data.Error));
    }

    dispatch(getMovieSuccess(data));
    try {
    } catch (err) {
      getMovieFailure(err);
    }
  };
};
