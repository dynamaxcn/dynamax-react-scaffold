const initialState = {
    text: ''
}

function todo(state = initialState, action) {

    switch (action.type) {

        case 'ON_REQUEST':
            console.log('>>>>>>>>>>>ON_REQUEST')
            return Object.assign({}, state, {text: action.payload})
        case 'ON_SUCCESS':
            console.log('>>>>>>>>>>>ON_SUCCESS')
            return Object.assign({}, state, {text: action.payload})
        case 'ON_FAILURE':
            console.log('>>>>>>>>>>>ON_FAILURE')
            return Object.assign({}, state, {text: action.payload})
        default:
            return state
    }
}

export default todo