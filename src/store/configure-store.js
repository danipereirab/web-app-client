import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducers from '../reducers';
import {middleware as fetchMiddleware} from 'react-redux-fetch'
 
const logger = createLogger();
const middleware = [logger];
 
export default function configStore(initialState)
{
    return createStore(
        reducers,
        initialState,
        applyMiddleware(logger,fetchMiddleware)
    )
}


