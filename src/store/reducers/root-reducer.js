import {combineReducers} from 'redux';
import ModalReducer from './modal-reducer';
import AuthReducer from './auth-reducer';
import HotelReducer from './hotels-reducer';
const appReducer = combineReducers({
  ModalReducer: ModalReducer,
  AuthReducer: AuthReducer,
  HotelReducer: HotelReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
