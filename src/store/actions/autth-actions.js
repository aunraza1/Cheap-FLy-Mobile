import {signin} from '../../functions';
import {ModalHandler} from './modal-actions';
import {saveUser} from '../../utils/authutils';

export const LoginHandler = (email, password, goToHome) => {
  return async dispatch => {
    try {
      dispatch({type: 'LOGIN_PROGRESS'});
      signin(email, password, async data => {
        if (data?.user) {
          dispatch({type: 'LOGIN_SUCCESS', payload: data?.user});
          await saveUser(data?.user);
          goToHome();
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
