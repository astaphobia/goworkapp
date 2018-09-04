import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

import './favicon.ico'
import Routes from './routes'

const Store = createStore(() => { }, {}, applyMiddleware(reduxThunk))
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)