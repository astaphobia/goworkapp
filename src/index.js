import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

import '@/style.css'
import Store from './store'
import Routes from './routes'
import TopNavigation from './components/TopNavigation'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <React.Fragment>
                <TopNavigation />
                <Routes />
            </React.Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)