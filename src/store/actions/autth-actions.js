import {signin} from '../../functions';
import {ModalHandler} from './modal-actions';

export const LoginHandler = (email, password, goToHome) => {
  return async dispatch => {
    try {
      dispatch({type: 'LOGIN_PROGRESS'});
      signin(email, password, data => {
        if (data?.user) {
          dispatch({type: 'LOGIN_SUCCESS', payload: data?.user});
          goToHome();
          dispatch(
            ModalHandler({
              show: true,
              type: 'success',
              message: data?.message,
            }),
          );
        } else {
          dispatch({type: 'LOGIN_ERROR'});
          dispatch(
            ModalHandler({
              show: true,
              message: data?.message,
            }),
          );
        }
      });
    } catch (error) {
      dispatch({type: 'LOGIN_ERROR'});
      console.log('error', error);
    }
  };
};
