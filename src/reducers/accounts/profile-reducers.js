import * as types from '../../actions/accounts/action-types';


  export default function  post(state = {
    isFetching: false,
    didInvalidate: false,
    response: '',
  }, action) {
    switch (action.type) {
      case types.GET_PROFILE_REQUEST:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          user: action.user,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.GET_PROFILE_SUCCESS:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          user: action.user,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.GET_PROFILE_FAILURE:
        
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

  
