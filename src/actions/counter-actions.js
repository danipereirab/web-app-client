import * as types from './action-types';

export function incValue(count) {
    return {
      type: types.INC,
      count
    };
  }

  export function decValue(count) {
    return {
      type: types.DEC,
      count
    };
  }