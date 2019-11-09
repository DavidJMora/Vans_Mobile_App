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
      const { foundUser } = payload;
      return {
        isAuthenticated: true,
        user: {
          employee_number: foundUser.employee_number,
          jobTitle: foundUser.jobTitle,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName
        }
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
