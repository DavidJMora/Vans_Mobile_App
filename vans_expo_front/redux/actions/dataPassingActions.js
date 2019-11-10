import { GET_STOCK_LIST, UPDATED_STOCK_LIST, DELETE_ITEM_FROM_LIST, COMPLETE_ITEM_FROM_LIST, NO_STOCK_FOR_ITEM, LAST_STOCK_FOR_ITEM } from '../actionTypes/dataPassingTypes';

export const getQueue = () => dispatch => {
    console.log('fuck this shit')
    dispatch({
        type: GET_STOCK_LIST
    })
    console.log('why wont you work')
}