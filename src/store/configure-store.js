import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducers from '../reducers';
 
const logger = createLogger();
const middleware = [logger];
 
export default function configStore(initialState)
{
    return createStore(
        reducers,
        initialState,
        applyMiddleware(logger)
    )
}