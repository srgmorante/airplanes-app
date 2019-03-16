import initialState from './initialState';
import * as types from '../../05-constants/airports';

export default (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_AIRPORTS:
      return { ...state, airportList: action.airports};
    default:
      return state;
  }
}
