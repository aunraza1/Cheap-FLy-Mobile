import { signin, userSignup } from '../../functions';
import { ModalHandler } from './modal-actions';
import { saveUser } from '../../utils/authutils';

export const LoginHandler = (email, password, goToHome) => {
  return async dispatch => {
    try {
      dispatch({ type: 'LOGIN_PROGRESS' });
      signin(email, password, async data => {
        if (data?.user) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: data?.user });
          await saveUser(data?.user);
          goToHome();
        } else {
          dispatch({ type: 'LOGIN_ERROR' });
          dispatch(
            ModalHandler({
              show: true,
              message: data?.message,
            }),
          );
        }
      });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR' });
      console.log('error', error);
    }
  };
};
export const signupHandler = (name, email, password, goBack) => {
  return async dispatch => {
    dispatch({ type: "SIGNUP_PROGRESS" })
    userSignup(name, email, password, (data) => {
      if (data?.type === 'success') {
        dispatch(ModalHandler({
          show: true,
          message: data?.message
        }))
        dispatch({ type: "SIGNUP_SUCCESS" })
        goBack()
      }
      else {
        dispatch({ type: "SIGNUP_ERROR" })
        dispatch(ModalHandler({
          show: true,
          message: data?.message
        }))
      }
    })
  }
}
