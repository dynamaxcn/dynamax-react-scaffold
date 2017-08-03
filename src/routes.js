import React from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'


export default (store) => {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/:login/:name" component={RepoPage}/>
                <Route path="/:login" component={UserPage}/>
            </Route>
        </Router>
    )
}
