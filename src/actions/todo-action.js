import {REQUEST_API} from '../store/middleware/apiRequester'

export const addTodo = (text) => {
    return {
        [REQUEST_API]: {
            types: ['ON_REQUEST', 'ON_SUCCESS', 'ON_FAILURE'],
            service: () => {
                // return Promise.resolve(text)
                return Promise.reject(new Error(text))
            },
            onSuccess: (response) => {
                return response
            },
            onFailure: (error) => {
                return error
            },
        }
    }
}
