import * as types from '../accounts/action-types';
import fetch from 'isomorphic-fetch'
import profile, { getProfile, getProfileAsync } from '../accounts/profile-actions'



export function addUser(user) {
  return {
    type: types.ADD_USER_REQUEST,
    user,
    button : 'Creating account...',
    response: '',
    receivedAt: Date.now()
  }
}
export function addUserSuccess(user) {
  return {
    type: types.ADD_USER_SUCCESS,
    user,
    button : 'Register',
    response: 'Account created successfuly... Now you can log in',
    receivedAt: Date.now()
  }
}
export function addUserFailure(user,error) {
  return {
    type: types.ADD_USER_FAILURE,
    user,
    button : 'Register',
    response: 'Failure to create the account... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function login(user) {
  return {
    type: types.LOGIN_REQUEST,
    user,
    button : 'Log in...',
    response: '',
    receivedAt: Date.now()
  }
}
export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
    button : 'Log in',
    response: 'You are in.',
    receivedAt: Date.now()
  }
}
export function loginFailure(user,error) {
  return {
    type: types.LOGIN_FAILURE,
    user,
    button : 'Log in',
    response: 'Failure login... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function logOut(user) {  
  return {
    type: types.LOGOUT_REQUEST,
    user,
    button : 'Log out',
    response: 'Closing session',
    receivedAt: Date.now()
  }
}

export function logOutSuccess(user) {  
  return {
    type: types.LOGOUT_SUCCESS,
    user,
    button : 'Log out',
    response: 'Session closed',
    receivedAt: Date.now()
  }
}

export function logOutFailure(user) {  
  return {
    type: types.LOGOUT_FAILURE,
    user,
    button : 'Log out',
    response: 'Failure closing session... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function loggedIn() {  
  return {
    type: types.LOGGEDIN_REQUEST,
    response: 'Log in request',
    receivedAt: Date.now()
  }
}

export function loggedInSuccess(user) {  
  return {
    type: types.LOGGEDIN_SUCCESS,
    user,
    response : 'Logged in success',
    receivedAt: Date.now()
  }
}

export function loggedInFailure() {  
  return {
    type: types.LOGGEDIN_FAILURE,
    response: 'Failure logged in',
    receivedAt: Date.now()
  }
}


//Fake async function
/*export function addUserAsync(user) {
  return dispatch => {
    dispatch(addUser(user));
    setTimeout(() => {
      dispatch(addUserSuccess(user));
    }, 5000);
    
  };
}*/

export function addUserAsync(user) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(addUser(user));
   
    return fetch('http://localhost:5000/api/account/register', 
    {
      method:'POST',
      cache: 'default',
      mode:  'cors',
      headers: new Headers 
      ({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
      }),
      body: JSON.stringify(user)
    })
      .then(response => response.json()
      .then(userLogged => ({ userLogged, response })))
      .then(({ userLogged, response }) =>  
      {
        if(response.ok) {
          
          // If login was successful, set the token in local storage and dispacth success action
          localStorage.setItem('jwt', userLogged.token)
          dispatch(addUserSuccess(userLogged))
          getProfileAsync(userLogged)
         
        } else {
          dispatch(addUserFailure(user,response.statusText))
      
        }
    }).catch(error => dispatch(addUserFailure(user,error)));
  }
}


export function loginAsync(user) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(login(user));
    
    return fetch('http://localhost:5000/api/account/login', 
    {
      method:'POST',
      cache: 'default',
      mode:  'cors',
      headers: new Headers 
      ({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
      }),
      body: JSON.stringify(user)
    })
      .then(response => response.json()
      .then(userLogged => ({ userLogged, response })))
      .then(({ userLogged, response }) =>  
      {
        if(response.ok) {
          
          // If login was successful, set the token in local storage and dispacth success action
          localStorage.setItem('jwt', userLogged.token)
          dispatch(loginSuccess(userLogged))
        } else {
          dispatch(loginFailure(user,response.statusText))
        }
    }).catch(error => dispatch(loginFailure(user,error)));
  }
}


export function logoutAsync(user) {
  return function (dispatch) {
    try {
      dispatch(logOut(user));
      localStorage.removeItem('jwt');
      dispatch(logOutSuccess(user));
      }
      catch(err) {
        dispatch(logOutFailure(user));
      }
  }
}


export function isLoggedInAsync(){
  return function (dispatch) {
      dispatch(loggedIn());
      return fetch('http://localhost:5000/api/account/isTokenValid', 
      {
        method:'POST',
        cache: 'default',
        mode:  'cors',
        headers: new Headers 
        ({
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
        }),
      })
        .then(response => response.json()
        .then(userLogged => ({ userLogged, response })))
        .then(({ userLogged, response }) =>  
        {
          if(response.ok) {
            dispatch(loggedInSuccess(userLogged))
          } else {
            dispatch(loggedInFailure(response.statusText))
          }
      }).catch(error => dispatch(loggedInFailure(error)));
    }
  }




