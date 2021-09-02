import React, { useEffect } from "react";
import classes from "./movieDetail.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetMovie, removeMovie } from "../../redux/actions/movie.action";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../animation/animate";

const MoviesDetailPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movie);
  const isGettingMovie = useSelector((state) => state.movie.isGettingMovie);
  const movieErrMsg = useSelector((state) => state.movie.getMovieError);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("overflow-hidden");

    dispatch(asyncGetMovie(`${id}`));

    return () => {
      document.body.classList.remove("overflow-hidden");
      dispatch(removeMovie());
    };
  }, [dispatch, id]);

  return (
    <div className={classes["root"]}>
      <div className={classes["content"]}>
        <div
          className={classes["space"]}
          onClick={() => history.goBack()}
        ></div>
        <div className={classes["modal"]}>
          <div
            className={classes["arrow-box"]}
            onClick={() => history.goBack()}
          >
            <BsArrowLeft className={classes["arrow-back"]} />
          </div>
          {isGettingMovie && !movieErrMsg && !movie && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <Loader type="Oval" color="#5f2eea" height={40} width={40} />
            </div>
          )}
          {!isGettingMovie && movie && !movieErrMsg && (
            <motion.div
              initial="out"
              animate="in"
              exit="out"
              variants={pageTransition}
              transition={transit}
            >
              <figure className={classes["img-box"]}>
                <img
                  className={classes["img"]}
                  src={`${movie.Poster}`}
                  alt="i"
                />
              </figure>
              <h3 className={classes["title"]}>{movie.Title}</h3>
              <p className={classes["text"]}>{movie.Plot}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailPage;
