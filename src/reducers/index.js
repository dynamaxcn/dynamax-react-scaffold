import * as ActionTypes from '../actions'

import auth from './auth'
import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'


const errorMessage = (state = null, action) => {
    const {type, error} = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
}


const rootReducer = combineReducers({
    routing,
    errorMessage,
    auth
})

export default rootReducer
