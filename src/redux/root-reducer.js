import { combineReducers } from "redux";

import userReducer from "./user-reducer.js";
import cartReducer from "./cart-reducer.js";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});