import React, { useEffect } from "react";
import classes from "./homepage.module.css";
import Search from "../../components/Search/Search";
import MovieCard from "../../components/movieCard/MovieCard";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../animation/animate";

const HomePage = () => {
  const movies = useSelector((state) => state.search.movies);
  const isSearching = useSelector((state) => state.search.isSearching);
  const errMsg = useSelector((state) => state.search.searchErrMsg);

  useEffect(() => {
    if (movies) {
      console.log("MOVIES", movies.Search);
    }
  }, [movies]);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
    >
      <Search />
      {!movies && !errMsg && !isSearching && (
        <div className={classes["search-q"]}>
          <h1>Search Movies</h1>
        </div>
      )}

      {!movies && errMsg && !isSearching && (
        <div className={classes["search-q"]}>
          <h1>{errMsg}</h1>
        </div>
      )}
      <div className={classes["search-result"]}>
        {/* <p className={classes["search-res"]}>Results for:</p> */}
        {/* <h4 className={classes["search-title"]}>Mortal Kombat</h4> */}
      </div>
      {isSearching && (
        <div className={classes["search-q"]}>
          <Loader type="Oval" color="#5f2eea" height={40} width={40} />
        </div>
      )}
      <div className={classes["movies-result"]}>
        {movies &&
          movies.Search.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </motion.div>
  );
};

export default HomePage;
