import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
import Axios from "../../services/Axios";
// import axios from 'axios'
export const login = employeeInfo => async dispatch => {
  let success;
  try {
    success = await Axios.post("/users/login", employeeInfo);
    dispatch(setAuthSuccessUser(success.data));
    return Promise.resolve(success.data.message);
  } catch (error) {
    console.warn(error);
    return Promise.reject(error);
  }
};

/* async dispatching is possible due to applyMiddleware  */

// assist the async
export const setAuthSuccessUser = employeeInfo => dispatch => {
  dispatch({
    type: AUTH_LOGIN_SUCCESSFUL,
    payload: employeeInfo
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: AUTH_USER_LOGOUT
  });
};

//exp.errorRecovery
//console.warn() throws a yellow box on the ipad
//import {YellowBox} from 'react-native';
//YellowBox.ignoreWarnings(['Warning: ...']);
