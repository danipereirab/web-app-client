import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import registration from './account-reducers'
import counter from './counter-reducers';


const reducers = {
  // ... your other reducers here ...
  counter,
  registration,
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default reducer;