import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import movieReducer from "./reducers/movie.reducer";
import searchReducer from "./reducers/search.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  movie: movieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
