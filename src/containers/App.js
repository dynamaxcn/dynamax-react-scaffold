/* eslint-disable no-undef */
import {connect} from 'react-redux'
import {resetErrorMessage} from '../actions/index'

import App from '../components/App/index'

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
})

export default connect(mapStateToProps, {
    resetErrorMessage
})(App)
