import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import visibleReducer from './visibleReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: visibleReducer,
});

export default rootReducer;
