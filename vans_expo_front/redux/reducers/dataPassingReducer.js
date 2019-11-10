// define and declare initial state
// create reducers with switch case

/**


import {  } from "../actionTypes/types";

const initialState = {

  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case " ":
      return {

      };
    default:
      return state;
  }
}

*/

import { GET_STOCK_LIST, UPDATED_STOCK_LIST, DELETE_ITEM_FROM_LIST, COMPLETE_ITEM_FROM_LIST, NO_STOCK_FOR_ITEM, LAST_STOCK_FOR_ITEM } from '../actionTypes/dataPassingTypes';

const initialState = {
  //* queue will be where list for product will be stored and manipulated based on action.
  queue: [
    {id: 1, title: 'One'},
    {id: 2, title: 'Two'},
    {id: 3, title: 'Three'}
  ],
  //* for later when we send messages back based on button selected from stock
  notifications: {}
};
export default function(state = initialState, action) {

  switch(action.type) {
    
    case GET_STOCK_LIST:
    
      return {
        ...state
      }
    
      default: 
        return state;
  }
}