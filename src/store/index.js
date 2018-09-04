import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise-middleware'
import reducers from './reducers'
import reduxLogger from 'redux-logger'

let middlewares = [reduxThunk, reduxPromise()]
if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, reduxLogger]
}
const composeEnhancers = process.env.NODE_ENV === 'development'
    ? composeWithDevTools
    : compose

export default createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(...middlewares))
)