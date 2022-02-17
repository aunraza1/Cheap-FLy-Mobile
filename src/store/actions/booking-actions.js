import {addBooking} from '../../functions';
import {ModalHandler} from './modal-actions';

export const Book = (obj, navigation) => {
  return async dispatch => {
    try {
      dispatch({type: 'BOOK_APPOINTMENT_PROGRESS', payload: true});

      addBooking(obj, data => {
        if (data?.type === 'error') {
          dispatch({type: 'BOOK_APPOINTMENT_ERROR', payload: false});
          dispatch(
            ModalHandler({
              show: true,
              type: 'error',
              message: data?.message,
            }),
          );
        } else {
          dispatch({type: 'BOOK_APPOINTMENT_SUCCESS', payload: false});
          dispatch(
            ModalHandler({
              show: true,
              type: 'success',
              message: data?.message,
            }),
          );
          navigation.goBack();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
};
