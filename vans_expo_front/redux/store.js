import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  // alraedy have native debugger installed, no need for calling the window redux devtool... i think...
);

{
  /* https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title */
}
export default store;
