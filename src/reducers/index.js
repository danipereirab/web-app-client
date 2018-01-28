import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import account from '../reducers/accounts/account-reducers'
import counter from './counter-reducers';

import {reducer as fetchReducer} from 'react-redux-fetch';


const reducers = {
  // ... your other reducers here ...
  counter,
  account,
  form: formReducer,     // <---- Mounted at 'form'
  repository: fetchReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default reducer;