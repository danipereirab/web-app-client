import * as types from '../accounts/action-types';
import fetch from 'isomorphic-fetch'



export function signUp(user) {
  return {
    type: types.SIGN_UP_REQUEST,
    user,
    button : 'Creating account...',
    response: '',
    receivedAt: Date.now()
  }
}
export function signUpSuccess(user) {
  return {
    type: types.SIGN_UP_SUCCESS,
    user,
    button : 'Sign Up',
    response: 'Account created successfuly... Now you can log in',
    receivedAt: Date.now()
  }
}
export function signUpFailure(user,error) {
  return {
    type: types.SIGN_UP_FAILURE,
    user,
    button : 'Sign Up',
    response: 'Failure to create the account... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function signIn(user) {
  return {
    type: types.SIGNIN_REQUEST,
    user,
    button : 'Sign in...',
    response: '',
    receivedAt: Date.now()
  }
}
export function signInSuccess(user) {
  return {
    type: types.SIGNIN_SUCCESS,
    user,
    button : 'Sign in',
    response: 'You are in.',
    receivedAt: Date.now()
  }
}
export function signInFailure(user,error) {
  return {
    type: types.SIGNIN_FAILURE,
    user,
    button : 'Sign in',
    response: 'Failure signing in... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function signOut(user) {  
  return {
    type: types.SIGNOUT_REQUEST,
    user,
    button : 'Sign out',
    response: 'Closing session',
    receivedAt: Date.now()
  }
}

export function signOutSuccess(user) {  
  return {
    type: types.SIGNOUT_SUCCESS,
    user,
    button : 'Sign out',
    response: 'Session closed',
    receivedAt: Date.now()
  }
}

export function signOutFailure(user) {  
  return {
    type: types.SIGNOUT_FAILURE,
    user,
    button : 'Sign out',
    response: 'Failure closing session... Please try it again later.',
    receivedAt: Date.now()
  }
}

export function loggedIn() {  
  return {
    type: types.LOGGEDIN_REQUEST,
    response: 'Sign in request',
    receivedAt: Date.now()
  }
}

export function loggedInSuccess(user) {  
  return {
    type: types.LOGGEDIN_SUCCESS,
    user,
    response : 'Sign in success',
    receivedAt: Date.now()
  }
}

export function loggedInFailure() {  
  return {
    type: types.LOGGEDIN_FAILURE,
    response: 'Failure sign in. Yout token is not ok.',
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

export function signUpAsync(user) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(signUp(user));
   
    return fetch('http://localhost:5000/api/account/signup', 
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
          // If signin was successful, set the token in local storage and dispacth success action
          localStorage.setItem('jwt', userLogged.token)
          dispatch(signUpSuccess(userLogged))
        } else {
          dispatch(signUpFailure(user,response.statusText))
        }
    }).catch(error => dispatch(signUpFailure(user,error)));
  }
}


export function signInAsync(user) {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(signIn(user));
    
    return fetch('http://localhost:5000/api/account/signin', 
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
          
          // If signin was successful, set the token in local storage and dispacth success action
          localStorage.setItem('jwt', userLogged.token)
          dispatch(signInSuccess(userLogged))
        } else {
          dispatch(signInFailure(user,response.statusText))
        }
    }).catch(error => dispatch(signInFailure(user,error)));
  }
}


export function signOutAsync(user) {
  return function (dispatch) {
    try {
      dispatch(signOut(user));
      localStorage.removeItem('jwt');
      dispatch(signOutSuccess(user));
      }
      catch(err) {
        dispatch(signOutFailure(user));
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




