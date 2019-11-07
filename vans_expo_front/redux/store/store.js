import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
/*
  - rootReducer is basically calling index without having to define it
  - in ES6
*/

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
  add some code
  */
}
export default store;
