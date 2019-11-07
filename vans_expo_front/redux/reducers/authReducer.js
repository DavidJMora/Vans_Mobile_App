// should only be login and possibly select a role for the day
import { AUTH_LOGIN_SUCCESSFUL, AUTH_USER_LOGOUT } from "../actionTypes/types";
const initialState = {
  isAuthenticated: false,
  user: {
    employee_number: "",
    jobTitle: "",
    firstName: "",
    lastName: ""
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN_SUCCESSFUL:
      console.log(payload, "blue");
      return {
        isAuthenticated: true,
        user: payload
      };
    case AUTH_USER_LOGOUT:
      return {
        isAuthenticated: null,
        user: {}
      };
    default:
      return state;
  }
}
