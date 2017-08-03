import React, {Component} from 'react'
import PropTypes from 'prop-types'

//noinspection JSUnresolvedVariable
import styles from './index.css';


class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        inputValue: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    render() {
        const {children} = this.props
        return (
            <div>
                <div className={styles['header']}>
                    <h1>City Gallery</h1>
                </div>
                <div className={styles['nav']}>
                    <li>菜单1</li>
                    <li>菜单2</li>
                    <li>菜单3</li>
                    <li>菜单4</li>
                </div>
                <div className={styles['section']}>
                    {children}
                </div>
                <div className={styles['footer']}>
                    Copyright dynamaxcn.com
                </div>
            </div>
        )
    }
}

export default App