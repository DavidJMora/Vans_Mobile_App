import {
  GET_STOCK_LIST,
  UPDATE_STOCK_LIST,
  DELETE_ITEM_FROM_LIST,
  COMPLETE_ITEM_FROM_LIST,
  NO_STOCK_FOR_ITEM,
  LAST_STOCK_FOR_ITEM,
  ADD_TO_QUEUE
} from "../actionTypes/dataPassingTypes";

const initialState = {
  //* queue will be where list for product will be stored and manipulated based on action.
  queue: null,
  //* for later when we send messages back based on button selected from stock
  notifications: {
    key: "blue"
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STOCK_LIST:
      //console.log(action.payload,'you never make it past here')

      return {
        ...state,
        queue: action.payload
      };

    case ADD_TO_QUEUE:

      let newQueue = [...state.queue, action.payload];
      return {
        ...state,
        queue: newQueue
      };

    case DELETE_ITEM_FROM_LIST:
      let updatedQueue = state.queue.filter(item => item.queueID !== action.payload[0].queueID)
      
      return {
        ...state,
        queue: updatedQueue
      };

    default:
      return state;
  }
}
