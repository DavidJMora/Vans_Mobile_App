import {
  GET_STYLES_BY_CATEGORY_ID,
  SUBMIT_SHOE_REQUEST_BY_ID
} from "../actionTypes/floorTypes";

import Axios from "../../services/Axios";

export const getStylesByCategoryID = categoryID => async dispatch => {
  try {
    let getCategoryStyles = Axios.get(`/${categoryID}`);
    return Promise.resolve({ getCategoryStyles });
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
