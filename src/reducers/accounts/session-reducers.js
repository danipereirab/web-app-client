import * as types from '../../actions/accounts/action-types';


  export default function  post(state = {
    isFetching: false,
    didInvalidate: false,
    isAuthenticated: false,
    response: '',
    button: 'Register'
  }, action) {
    switch (action.type) {
      case types.ADD_USER_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.ADD_USER_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.ADD_USER_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
        case types.LOGIN_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: true,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGIN_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGIN_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGOUT_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false,
          isAuthenticated: true,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGOUT_SUCCESS:
        
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          isAuthenticated: false,
          user: action.user,
          button: action.button,
          response: action.response,
          lastUpdated: action.receivedAt
        })
      case types.LOGOUT_FAILURE:
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

  
