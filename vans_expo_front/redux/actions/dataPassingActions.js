import { GET_STOCK_LIST, UPDATE_STOCK_LIST, DELETE_ITEM_FROM_LIST, COMPLETE_ITEM_FROM_LIST, NO_STOCK_FOR_ITEM, LAST_STOCK_FOR_ITEM } from '../actionTypes/dataPassingTypes';

export const getQueue = () => dispatch => {
    
    dispatch({
        type: GET_STOCK_LIST
    })
    
}

export const updateStockList = (data) => dispatch => {
    console.log(data)
    dispatch({
        type: UPDATE_STOCK_LIST,
        payload: data
    })
}