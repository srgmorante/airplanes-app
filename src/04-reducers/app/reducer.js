import initialState from './initialState';
const cases = {
  default: state => state
};

export default (state = initialState, action) => {
  return (cases[action.type] || cases.default)(state, action);
}