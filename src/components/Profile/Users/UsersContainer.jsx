import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setTotalCount,
    getUsers,
    toggleFollowingInProcess
} from '../../../redux/reducer/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
    selectUsers,
    selectPageSize,
    selectCurrentPage,
    selectTotalCount,
    selectIsFetching,
    selectFollowingInProcess
} from '../../../redux/selector/usersSelector';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
            onPageChanged={this.onPageChanged.bind(this)}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingInProcess={this.props.toggleFollowingInProcess}
            followingInProcess={this.props.followingInProcess}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        pageSize: selectPageSize(state),
        currentPage: selectCurrentPage(state),
        totalCount: selectTotalCount(state),
        isFetching: selectIsFetching(state),
        followingInProcess: selectFollowingInProcess(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setTotalCount, getUsers, toggleFollowingInProcess })
)(UsersContainer);