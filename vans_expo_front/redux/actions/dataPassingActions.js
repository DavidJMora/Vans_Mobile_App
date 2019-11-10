import { GET_STOCK_LIST, UPDATED_STOCK_LIST, DELETE_ITEM_FROM_LIST, COMPLETE_ITEM_FROM_LIST, NO_STOCK_FOR_ITEM, LAST_STOCK_FOR_ITEM } from '../actionTypes/dataPassingTypes';

export const getQueue = () => dispatch => {
    
    dispatch({
        type: GET_STOCK_LIST
    })
    
}