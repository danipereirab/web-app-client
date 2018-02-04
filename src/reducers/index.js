import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import session from '../reducers/accounts/session-reducers'
import profile from '../reducers/accounts/profile-reducers'
import {reducer as fetchReducer} from 'react-redux-fetch';


const reducers = {
  // ... your other reducers here ...
  session,
  profile,
  form: formReducer,     // <---- Mounted at 'form'
  repository: fetchReducer
}
const reducer = combineReducers(reducers)
createStore(reducer)

export default reducer;