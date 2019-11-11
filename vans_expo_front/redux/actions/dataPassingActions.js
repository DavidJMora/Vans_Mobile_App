import { GET_STOCK_LIST, UPDATE_STOCK_LIST, DELETE_ITEM_FROM_LIST, COMPLETE_ITEM_FROM_LIST, NO_STOCK_FOR_ITEM, LAST_STOCK_FOR_ITEM } from '../actionTypes/dataPassingTypes';
import Axios from '../../services/Axios';

export const getQueue = () => async dispatch => {
    
    try {
        let retrievedQueue = await Axios.get('/queue/get-queue');
    
        dispatch({
            type: GET_STOCK_LIST,
            payload: retrievedQueue.data[0]
        })
        return Promise.resolve(retrievedQueue.data[0].items)
    } catch (error) {
        console.log(error);
        return Promise.reject(error)
    }

}

export const updateStockList = (data) => dispatch => {
    // console.log(data, 'dataPassingAction line 20')
    dispatch({
        type: UPDATE_STOCK_LIST,
        payload: data
    })
}