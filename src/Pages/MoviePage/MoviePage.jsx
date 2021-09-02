import React, { useEffect } from "react";
import classes from "./moviePage.module.css";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
// import MovieCard from "../../components/movieCard/MovieCard";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetMovie, removeMovie } from "../../redux/actions/movie.action";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../animation/animate";

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " hr " + rminutes + " mins";
}

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const isGettingMovie = useSelector((state) => state.movie.isGettingMovie);
  const movieErrMsg = useSelector((state) => state.movie.getMovieError);

  console.log(movie);

  useEffect(() => {
    dispatch(asyncGetMovie(`${id}`));

    return () => {
      dispatch(removeMovie());
    };
  }, [dispatch, id]);
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
      className={classes["root"]}
    >
      {isGettingMovie && !movieErrMsg && !movie && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Loader type="Oval" color="#5f2eea" height={40} width={40} />
        </div>
      )}
      {!isGettingMovie && movie && !movieErrMsg && (
        <motion.div>
          <div className={classes["current-movie"]}>
            <figure className={classes["current-img-box"]}>
              <img
                className={classes["current-img"]}
                src={`${movie.Poster}`}
                alt="kio"
              />
            </figure>
            <div className={classes["movie-detail"]}>
              <h2 className={classes["movie-title"]}>{movie.Title}</h2>
              <p className={classes["movie-plot"]}>{movie.Plot}</p>
              <ul className={classes["movie-props"]}>
                <li className={classes["movie-props-item"]}>
                  <AiOutlineClockCircle className={classes["movie-icon"]} />
                  <p className={classes["movie-text"]}>{movie.Released}</p>
                </li>
                <li className={classes["movie-props-item"]}>
                  <AiOutlineStar className={classes["movie-icon"]} />
                  <p className={classes["movie-text"]}>{movie.imdbRating}</p>
                </li>
                <li className={classes["movie-props-item"]}>
                  <FiPlay className={classes["movie-icon"]} />
                  <p className={classes["movie-text"]}>
                    {timeConvert(movie.Runtime.split(" ")[0])}
                  </p>
                </li>
              </ul>
              <div className={classes["movie-actions"]}>
                <button className={classes["watch-btn"]}>Watch Now</button>
                <div className={classes["heart-box"]}>
                  <AiOutlineHeart className={classes["heart-icon"]} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes["similar-movie"]}>
            {/* <h className={classes["movie-title"]}>Similar Movies</h> */}
            <div className={classes["similar-movies-container"]}>
              {/* <MovieCard />
          <MovieCard />
          <MovieCard /> */}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MoviePage;
