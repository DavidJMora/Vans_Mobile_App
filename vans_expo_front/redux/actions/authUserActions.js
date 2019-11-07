import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
import Axios from "../../services/Axios";
// import axios from 'axios'
export const login = employeeInfo => async dispatch => {
  console.log(employeeInfo, 'wonderful')
  try {
    let success = await Axios.post("/users/login", employeeInfo);
    console.log(success, 'failure')
    dispatch(setAuthSuccessUser(employeeInfo));
    const { user } = success.data;
    console.log(user, 'hola');
    return Promise.resolve({ user });
  } catch (error) {
    console.warn(error);
  }
};

/* async dispatching is possible due to applyMiddleware  */

// assist the async
export const setAuthSuccessUser = employeeInfo => dispatch => {
  console.log(employeeInfo, 'greeen')
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
