import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";

export const login = employeeInfo => async dispatch => {
  try {
    dispatch(setAuthSuccessUser(employeeInfo));
  } catch (error) {
    console.warn(error);
  }
};
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
