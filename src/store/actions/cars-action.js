import {getAllCars} from '../../functions';

export const GestAllCars = () => {
  try {
    return async dispatch => {
      dispatch({type: 'GET_CARS_PROGRESSS'});
      getAllCars(data => {
        if (data.length > 0 || data.length == 0) {
          dispatch({type: 'GET_CARS_SUCCESS', payload: data});
        } else {
          dispatch({type: 'GET_CARS_ERROR', payload: null});
        }
      });
    };
  } catch (error) {
    dispatch({type: 'GET_CARS_ERROR', payload: null});
    console.log(error);
  }
};
