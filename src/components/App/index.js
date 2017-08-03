import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import Explore from '../Explore/index'
import style from './index.css';


class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    handleDismissClick = e => {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    handleChange = nextValue => {
        browserHistory.push(`/${nextValue}`)
    }

    renderErrorMessage() {
        const {errorMessage} = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{backgroundColor: '#e99', padding: 10}}>
                <b>{errorMessage}</b>
                {' '}
                <button onClick={this.handleDismissClick}>
                    Dismiss
                </button>
            </p>
        )
    }

    render() {
        const {children, inputValue} = this.props
        return (
            <div>
                <div className={style['header']}>
                    <h1>City Gallery</h1>
                </div>
                <div className={style['section']}>
                    <Explore value={inputValue} onChange={this.handleChange}/>
                    <hr/>
                    {this.renderErrorMessage()}
                    {children}
                </div>
                <div className={style['footer']}>
                    Copyright dynamaxcn.com
                </div>
            </div>
        )
    }
}

export default App