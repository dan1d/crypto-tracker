import axios from 'axios';
import { apiBaseURL } from "../utils/Constants";
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_ERROR
} from '../utils/ActionTypes';

export default async function FetchCoinData() {
  return async dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });
    try {
        let response = await axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
        dispatch({
          type: FETCHING_COIN_DATA_SUCCESS,
          payload: response.data
        });
        return response
    } catch(err) {
        dispatch({ 
            type: FETCHING_COIN_DATA_ERROR, 
            payload: err.data 
        });
        return err;
    }
  };
}
