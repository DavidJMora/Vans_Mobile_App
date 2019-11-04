import { AUTH_LOGIN_SUCCESSFUL } from "../actionTypes/index";

export const login = employeeInfo => async dispatch => {
  try {
    dispatch({
      type: AUTH_LOGIN_SUCCESSFUL,
      payload: employeeInfo
    });
  } catch (error) {
    console.warn(error);
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: AUTH_USER_LOGOUT,
    payload: {}
  });
};
//exp.errorRecovery
//console.warn() throws a yellow box on the ipad
//import {YellowBox} from 'react-native';
//YellowBox.ignoreWarnings(['Warning: ...']);
