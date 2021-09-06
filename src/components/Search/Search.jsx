import React, { useState } from "react";
import classes from "./search.module.css";
import searchIcon from "../../assets/Search.svg";
import { useDispatch } from "react-redux";
import { asyncSearchMovie } from "../../redux/actions/search.actions";

const Search = () => {
  const [searchStr, setSearchStr] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (!searchStr) return;
    e.preventDefault();
    setSearchStr("");
    dispatch(asyncSearchMovie(searchStr));
  };

  return (
    <div>
      <h2 className={classes["search-title"]}>Explore</h2>
      <form className={classes["form"]} onSubmit={handleSearch}>
        <div className={classes["input-container"]}>
          <img
            src={searchIcon}
            alt="search"
            className={classes["search-icon"]}
          />
          <input
            className={classes["search-input"]}
            type="search"
            name="search"
            placeholder="search"
            onChange={(e) => setSearchStr(e.target.value)}
            tabindex="0"
          />
        </div>
        
          <button onClick={handleSearch} className={classes["search-btn"]}>
            search
          </button>
          <button onClick={handleSearch} className={classes["search-btn2"]}>
            <img
              src={searchIcon}
              alt="search"
              className={classes["search-icon2"]}
            />
          </button>
        
      </form>
    </div>
  );
};

export default Search;
