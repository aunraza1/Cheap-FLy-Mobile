import {combineReducers} from 'redux';
import ModalReducer from './modal-reducer';
import AuthReducer from './auth-reducer';
const appReducer = combineReducers({
  ModalReducer: ModalReducer,
  AuthReducer: AuthReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
