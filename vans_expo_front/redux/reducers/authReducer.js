// should only be login and possibly select a role for the day
import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN_SUCCESSFUL:
      console.log(payload, "line 12 authReducer");
      const { foundUser } = payload;
      return {
        isAuthenticated: true,
        user: action.payload
      };
    case AUTH_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
}
