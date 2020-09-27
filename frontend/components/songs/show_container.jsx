import React from 'react';
import { connect } from 'react-redux';
import SongShow from './charts';

const mSTP = ({entities}) => ({
    song: entities.songs
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(SongShow);