import React from "react";
import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes["nav"]}>
      <NavLink
        to="/"
        activeClassName={classes["nav-active"]}
        className={classes["nav-link"]}
      >
        <figure className={classes["nav-icon-container"]}>
          <svg
            // width="15"
            // height="15"
            className={classes["nav-svg"]}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
              // stroke="#14142B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={classes["nav-stroke"]}
            />
            <path
              d="M11 11L9 9"
              // stroke="#14142B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={classes["nav-stroke"]}
            />
          </svg>
        </figure>
        <p className={classes["nav-text"]}>Search</p>
      </NavLink>
      <div
        // to="movie/test"
        style={{ cursor: "pointer" }}
        activeClassName={classes["nav-active"]}
        className={classes["nav-link"]}
      >
        <figure className={classes["nav-icon-container"]}>
          <svg
            // width="15"
            // height="15"
            className={classes["nav-svg"]}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z"
              className={classes["nav-stroke"]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </figure>
        <p className={classes["nav-text"]}>WatchList</p>
      </div>
    </div>
  );
};

export default Sidebar;
