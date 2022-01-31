import {combineReducers} from 'redux';
import ModalReducer from './modal-reducer';
const appReducer = combineReducers({
  ModalReducer: ModalReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
