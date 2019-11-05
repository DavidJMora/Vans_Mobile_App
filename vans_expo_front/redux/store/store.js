import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

{
  /*

  https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title

  Note: Finish up creating the provider and store.

  */
}
export default store;
