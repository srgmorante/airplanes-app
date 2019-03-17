import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import airportsReducers from './airports/reducer';

export default combineReducers({
  app: appReducer,
  airport: airportsReducers,
});