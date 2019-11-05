import { combineReducers } from "redux";
import authReducer from "./authReducer";
import msgReducer from "./msgReducer";

// reducer needed for system messages
// reducer needed for global messages

export default combineReducers({
  authUser: authReducer,
  message: msgReducer
});
