import {
  GET_ALL_CATERGORIES,
  GET_FLOOR_DATA,
  SUBMIT_SHOE_REQUEST_BY_ID
} from "../actionTypes/floorTypes";

import Axios from "../../services/Axios";

export const getFloorData = () => async dispatch => {
  try {
    // Make first axios call to pull category data
    let allCategories = await Axios.get('/product/all-categories');
    // Deconstruct to pull object from array
    let { data } = allCategories;
    // For of loop that pull _id from each category and dynamically places it into next axios call which returns an array of objects with matching category id
    for( let { _id } of data ) {
      let filteredShoeStyle = await Axios.get(`/product/all-shoe-styles-by-categoryID/${_id}`);

      dispatch({
        type: GET_FLOOR_DATA,
        payload: filteredShoeStyle.data
      })
    }
  
  } catch (error) {
    console.log(error);
    console.log("You didn't send the right information, dumbass")
  }
}
