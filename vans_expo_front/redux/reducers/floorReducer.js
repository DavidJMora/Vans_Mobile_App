import {
  GET_ALL_CATERGORIES,
  GET_STYLES_BY_CATEGORY_ID,
  GET_SHOES_BY_SHOESTYLE_ID,
} from "../actionTypes/floorTypes";

category = {
  adult: [],
  kids: [],
  toddlers: []
}

export default function(state = category, action) {
  switch(action.type) {
    case GET_ALL_CATERGORIES:
      console.log(action.payload, 'payload')
      console.log('------')
      return {
        ...state,
      }

    default:
      return state;
  }
}