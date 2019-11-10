import {
  AUTH_LOGIN_FAILURE,
} from "../actionTypes/types";

const initialState = {
  serverMessage: null,
  messageStyle: {
    fontColorStyle: "",
    dynamicClassName: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_FAILURE:
      return {
        serverMessage: action.payload,
        messageStyle: {
          //   fontColorStyle: "#f44336",
          //   dynamicClassName: "App"
        }
      };
    default:
      return state;
  }
}
