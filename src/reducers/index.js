import auth from './auth'
import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    routing,
    auth,

})

export default rootReducer
