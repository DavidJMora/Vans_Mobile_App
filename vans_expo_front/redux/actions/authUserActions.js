import { AUTH_LOGIN_SUCCESSFUL } from "../actionTypes/index";

export const login = employeeInfo => async dispatch => {
  try {
    dispatch({
      type: AUTH_LOGIN_SUCCESSFUL,
      payload: employeeInfo
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async dispatch => {};
//exp.errorRecovery
//console.warn() throws a yellow box on the ipad
//import {YellowBox} from 'react-native';
//YellowBox.ignoreWarnings(['Warning: ...']);
