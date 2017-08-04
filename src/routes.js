import React from 'react'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './containers/App'
import Login from './containers/Login'
import Todo from './containers/Todo'

function authorize(nextState, replaceState, callback) {
    callback();
}

export default (store) => {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Router history={history}>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App} onEnter={authorize}>
                <IndexRoute component={Todo}/>
            </Route>
        </Router>
    )
}
