import * as types from '../../actions/accounts/action-types';


  export default function  post(state = {
    isFetching: false,
    didInvalidate: false,
    isAuthenticated: false,
    response: '',
    button: ''
  }, action) {
    switch (action.type) {
      case types.SIGN_UP_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGN_UP_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGN_UP_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
        case types.SIGNIN_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGNIN_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGNIN_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGNOUT_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGNOUT_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.SIGNOUT_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
        case types.LOGGEDIN_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGGEDIN_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGGEDIN_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }

  
