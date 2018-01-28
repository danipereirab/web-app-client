import * as types from '../action-types';
import fetch from 'isomorphic-fetch'

export function addUser(user) {
  return {
    type: types.ADD_USER,
    user,
    response: 'Creating account... wait for a while please.',
    receivedAt: Date.now()
  }
}
export function addUserSuccess(user) {
  return {
    type: types.ADD_USER_SUCCESS,
    user,
    response: 'Account created successfuly... Now you can log in',
    receivedAt: Date.now()
  }
}
export function addUserFailure(user) {
  return {
    type: types.ADD_USER_FAILURE,
    user,
    response: 'Failure to create the account... Please try it again later',
    receivedAt: Date.now()
  }
}



