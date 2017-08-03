import React from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import AuthUtil from './utils/auth-util';

import App from './containers/App'
import Login from './containers/Login'

function authorize(nextState, replaceState, callback) {
    if (!new AuthUtil().isLogin()) {  //如果没有登录，那么跳转到登录页面
        replaceState('/login');
    }
    callback();
}

export default (store) => {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Router history={history}>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App} onEnter={authorize}>

            </Route>
        </Router>
    )
}
