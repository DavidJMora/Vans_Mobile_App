import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
import Axios from "../../services/Axios";
// import axios from 'axios'
export const login = employeeInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/login", employeeInfo);
    dispatch(setAuthSuccessUser(employeeInfo));
    console.log(success.data)
    // const { user } = success.data;
    return Promise.resolve(success.data);
  } catch (error) {
    console.log(error);
    
    return Promise.reject(error)
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
