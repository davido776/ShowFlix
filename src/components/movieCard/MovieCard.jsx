import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./movieCard.module.css";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../animation/animate";

const MovieCard = ({ movie }) => {
  const location = useLocation();

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
      className={classes.card}
    >
      <Link
        to={{
          pathname: `/movies-detail/${movie.imdbID}`,
          state: { background: location },
        }}
      >
        <img
          src={`${movie.Poster}`}
          alt="Img"
          className={classes["card-img"]}
        />
      </Link>
      <Link to={`/movie/${movie.imdbID} `} className={classes["card-btn"]}>
        View
      </Link>
    </motion.div>
  );
};

export default MovieCard;
