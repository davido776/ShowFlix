import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import HomePage from "../Pages/Homepage/HomePage";
import MoviesDetailPage from "../Pages/MoviesDetailPage/MoviesDetailPage";
import MoviePage from "../Pages/MoviePage/MoviePage";
import Sidebar from "../components/Sidebar/Sidebar";
import classes from "./styles.module.css";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className={classes.home}>
      <nav className={classes.sidebar}>
        <h1 className={classes["sidebar-title"]}>
          Show<span className={classes["sidebar-title-span"]}>Flix</span>
        </h1>
        <Sidebar />
      </nav>
      <main className={classes.search}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={background || location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:id" component={MoviePage} />
            <Redirect to="/" />
          </Switch>
        </AnimatePresence>
      </main>
      {background && (
        <Route path="/movies-detail/:id" children={<MoviesDetailPage />} />
      )}
    </div>
  );
};

export default Routes;
