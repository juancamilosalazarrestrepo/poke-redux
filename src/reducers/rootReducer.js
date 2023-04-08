import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiReducer,
});

export default rootReducer;
