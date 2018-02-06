import * as types from '../accounts/action-types';
import fetch from 'isomorphic-fetch'

export function getProfile(user) {
    return {
      type: types.GET_PROFILE_SUCCESS,
      user,
      response: 'Loading profile...',
      receivedAt: Date.now()
    }
  }
  export function getProfileSuccess(user) {
    return {
      type: types.GET_PROFILE_SUCCESS,
      user,
      response: 'Profile loaded successfuly...',
      receivedAt: Date.now()
    }
  }
  export function getProfileFailure(user,error) {
    return {
      type: types.GET_PROFILE_FAILURE,
      user,
      response: 'Failure to load profile... Please try it again later.',
      receivedAt: Date.now()
    }
  }


  export function getProfileAsync(user) {
    return function (dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
      console.log('AAAAAAAAAAAAAAAA')
      dispatch(getProfile(user));
      dispatch(getProfileSuccess(user));
     
      /*return fetch('http://localhost:5000/api/account/signup', 
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
            dispatch(addUserSuccess(userLogged))
            getpro
           
          } else {
            dispatch(addUserFailure(user,response.statusText))
        
          }
      }).catch(error => dispatch(addUserFailure(user,error)));*/

    }
  }