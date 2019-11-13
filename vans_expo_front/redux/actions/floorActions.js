import {
  GET_ALL_CATERGORIES,
  GET_STYLES_BY_CATEGORY_ID,
  GET_SHOES_BY_SHOESTYLE_ID,
  SUBMIT_SHOE_REQUEST_BY_ID
} from "../actionTypes/floorTypes";

import Axios from "../../services/Axios";

export const getAllCategories = () => async dispatch => {
  try {
    let allCategories = await Axios.get('/product/all-categories');
    
    dispatch({
      type: GET_ALL_CATERGORIES,
      payload: allCategories.data
    })
  } catch (error) {
    console.log(error);

  }
}

export const getStylesByCategoryID = categoryID => async dispatch => {
  try {
    let getCategoryStyles = await Axios.get(`/${categoryID}`);
    
  } catch (error) {
    console.log(error);
    // No need for promises. We will have a universal error handler
  }
};
