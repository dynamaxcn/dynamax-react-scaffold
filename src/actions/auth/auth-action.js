import UCService from '../../services/UCService';
import {browserHistory} from 'react-router'
import {LOGIN_FETCH, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN_CLEAN_ERROR} from '../../constants/action-types';


export function login(user) {

    return function (dispatch) {
        dispatch({
            type: LOGIN_FETCH
        })

        return new UCService().login(user).then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            })
            dispatch(browserHistory.push('/'))
        }).catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                error: err.message
            })
        })


    }

}

export function logout() {
    return function (dispatch) {
        dispatch({
            type: LOGOUT
        })
    }
}

export function cleanError() {
    return function (dispatch) {
        dispatch({
            type: LOGIN_CLEAN_ERROR
        })
    }
}