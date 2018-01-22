import * as types from '../actions/action-types';

const initialState = {
    value: ""
  }
  
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, Object.assign({}, action.user)];
    default:
      return state;
  }
};
