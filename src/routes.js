import React from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './containers/App'
import Login from './containers/Login'


export default (store) => {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Router history={history}>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App}>

            </Route>
        </Router>
    )
}
