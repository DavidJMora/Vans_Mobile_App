import { GET_STOCK_LIST, 
    UPDATE_STOCK_LIST, 
    DELETE_ITEM_FROM_LIST, 
    COMPLETE_ITEM_FROM_LIST, 
    NO_STOCK_FOR_ITEM, 
    LAST_STOCK_FOR_ITEM, 
    ADD_TO_QUEUE } from '../actionTypes/dataPassingTypes';
import Axios from '../../services/Axios';

export const getQueue = () => async dispatch => {
    
    try {
        let retrievedQueue = await Axios.get('/queue/get-queue');
        // console.log(retrievedQueue.data, 'hello');
        // No need for Promise since we are saving data into the reducer
        dispatch({
            type: GET_STOCK_LIST,
            payload: retrievedQueue.data
        })
    } catch (error) {
        console.log(error, "You sure you know what you're doing?");
        //*create universal error reducer 
    }

}

export const addToQueue = (product, data) => async dispatch => {
    try {
        let addedProduct = await Axios.post(`/queue/add-product-to-queue/${product.productID}`, data);

        dispatch({
            type: ADD_TO_QUEUE,
            payload: addedProduct.data
        })

    } catch (error) {
        console.log(error, "You've made a mistake somewhere, YO.");
        //* create universal error reducer 
    }
}