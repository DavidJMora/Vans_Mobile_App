import {
  GET_STOCK_LIST,
  UPDATE_STOCK_LIST,
  DELETE_ITEM_FROM_LIST,
  COMPLETE_ITEM_FROM_LIST,
  NO_STOCK_FOR_ITEM,
  LAST_STOCK_FOR_ITEM
} from "../actionTypes/dataPassingTypes";

const initialState = {
  //* queue will be where list for product will be stored and manipulated based on action.
  queue: [],
  queueId: "",
  //* for later when we send messages back based on button selected from stock
  notifications: {
    key: "blue"
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STOCK_LIST:
      return {
        ...state,
        queue: action.payload.items,
        queueId: action.payload._id
      };

    case UPDATE_STOCK_LIST:
      let newQueue = [...state.queue, action.payload];
      return {
        ...state,
        queue: newQueue
      };

    default:
      return state;
  }
}
