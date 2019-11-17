import {
  GET_FLOOR_DATA,
  GET_STYLES_BY_CATEGORY_ID,
  GET_SHOES_BY_SHOESTYLE_ID
} from "../actionTypes/floorTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_FLOOR_DATA:
      let { categoryName, data } = action.payload;

      let key = categoryName;
      if (!Object.keys(state).includes(key)) {
        state[key] = data;
      }

      return {
        ...state
      };

    default:
      return state;
  }
}
