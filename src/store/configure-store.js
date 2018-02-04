import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducers from '../reducers';
import {middleware as fetchMiddleware} from 'react-redux-fetch'
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

export default function configStore(initialState)
{
    return createStore(
        reducers,
        initialState,
        applyMiddleware(logger,fetchMiddleware,thunk)
        
    )
}


