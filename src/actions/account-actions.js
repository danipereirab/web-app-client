import * as types from './action-types';

export const addUser = (text) => {
  return {
    type: types.ADD_USER,
    text
  };
}