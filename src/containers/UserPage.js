/* eslint-disable no-undef */

import {connect} from 'react-redux'
import UserPage from '../components/UserPage'
import {loadUser, loadStarred} from '../actions'

const mapStateToProps = (state, ownProps) => {

    const login = ownProps.params.login.toLowerCase()

    const {
        pagination: {starredByUser},
        entities: {users, repos}
    } = state

    const starredPagination = starredByUser[login] || {ids: []}
    const starredRepos = starredPagination.ids.map(id => repos[id])
    const starredRepoOwners = starredRepos.map(repo => users[repo.owner])

    return {
        login,
        starredRepos,
        starredRepoOwners,
        starredPagination,
        user: users[login]
    }
}

export default connect(mapStateToProps, {
    loadUser,
    loadStarred
})(UserPage)
