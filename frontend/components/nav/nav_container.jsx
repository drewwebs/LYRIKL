import React from 'react';
import { connect } from 'react-redux';
import { logout, clearErrors, loginDemo } from '../../actions/session_actions';
import Nav from './nav';

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    loginDemo: () => dispatch(loginDemo())
});

export default connect(mSTP, mDTP)(Nav);

