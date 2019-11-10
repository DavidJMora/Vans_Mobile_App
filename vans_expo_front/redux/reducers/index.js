import { combineReducers } from "redux";
import authReducer from "./authReducer";
import msgReducer from "./msgReducer";
import dataPassingReducer from './dataPassingReducer';
// import stockReducer from "./stockReducer";
// import floorReducer from "./floorReducer";

/**
    reducer needed for system messages
    reducer needed for global messages
                                          **/

export default combineReducers({
  authUser: authReducer,
  message: msgReducer,
  passedData: dataPassingReducer
  // stockUser: stockReducer
  // floorUser: floorReducer
});
