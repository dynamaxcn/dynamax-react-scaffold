/* eslint-disable no-undef */
import {connect} from 'react-redux'
import {resetErrorMessage} from '../actions/index'

import App from '../components/App/index'

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
    resetErrorMessage
})(App)
