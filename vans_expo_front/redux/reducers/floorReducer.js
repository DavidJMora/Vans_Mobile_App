import {
  GET_ALL_CATERGORIES,
  GET_STYLES_BY_CATEGORY_ID,
  GET_SHOES_BY_SHOESTYLE_ID,
} from "../actionTypes/floorTypes";

initialState = {
  adult: {
    
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_CATERGORIES:
      return {
        ...state,

      }

    default:
      return state;
  }
}