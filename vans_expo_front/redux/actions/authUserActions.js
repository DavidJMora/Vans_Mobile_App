import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
import Axios from "../../services/Axios";
export const login = employeeInfo => async dispatch => {
  try {
    let success = await Axios.post("/users/login", employeeInfo);
    dispatch(setAuthSuccessUser(employeeInfo));
    const { user } = success.data;
    console.log(user);
    return Promise.resolve({ user });
  } catch (error) {
    console.warn(error);
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
