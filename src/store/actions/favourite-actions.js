import {addToFavourite} from '../../functions';
import {ModalHandler} from './modal-actions';

export const AddToFavourites = (user_id, fav_id) => {
  return async dispatch => {
    try {
      dispatch({type: 'FAVOURITE_PROGRESS'});
      addToFavourite(user_id, fav_id, data => {
        if (data) {
          dispatch({type: 'FAVOURITE_SUCCESS'});
          dispatch(
            ModalHandler({
              show: true,
              message: data?.message,
              type: data?.type ? 'success' : 'error',
            }),
          );
        } else {
          dispatch({type: 'FAVOURITE_ERROR'});
        }
      });
    } catch (error) {
      dispatch({type: 'FAVOURITE_ERROR'});
      console.log('error', error);
    }
  };
};
