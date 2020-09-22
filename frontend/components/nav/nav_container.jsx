import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mSTP = ({ entities, session }) => ({
    currentUser: session.currentUser
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Nav);

