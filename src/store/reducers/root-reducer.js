import {combineReducers} from 'redux';
import ModalReducer from './modal-reducer';
import AuthReducer from './auth-reducer';
import HotelReducer from './hotels-reducer';
import FavouriteReducer from './favourite-reducer';
import BookingReducer from './booking-reducer';
const appReducer = combineReducers({
  ModalReducer: ModalReducer,
  AuthReducer: AuthReducer,
  HotelReducer: HotelReducer,
  FavouriteReducer: FavouriteReducer,
  BookingReducer: BookingReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
