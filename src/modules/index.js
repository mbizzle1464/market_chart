import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import PullStocks from "./PullStocks";

export default combineReducers({
  routing: routerReducer,
  PullStocks
});
