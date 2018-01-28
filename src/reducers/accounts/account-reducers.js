import * as types from '../../actions/action-types';


const initialState = {
    value: ""
  }
  
  export default function  posts(state = {
    isFetching: false,
    didInvalidate: false
  }, action) {
    switch (action.type) {
      case types.ADD_USER_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          user: action.user,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.ADD_USER:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          user: action.user,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.ADD_USER_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          user: action.user,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }
