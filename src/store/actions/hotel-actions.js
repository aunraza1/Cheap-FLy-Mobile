import {getAllHotels} from '../../functions';

export const GetHotels = () => {
  try {
    return async dispatch => {
      dispatch({type: 'GET_HOTELS_PROGRESSS'});
      getAllHotels(data => {
        if (data.length > 0 || data.length == 0) {
          dispatch({type: 'GET_HOTELS_SUCCESS', payload: data});
        } else {
          dispatch({type: 'GET_HOTELS_ERROR', payload: null});
        }
      });
    };
  } catch (error) {
    dispatch({type: 'GET_HOTELS_ERROR', payload: null});
    console.log(error);
  }
};
