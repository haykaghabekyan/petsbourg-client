import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getRoutes } from '../routes';

const mapStateToProps = state => ({ auth: state.auth });

export const App = withRouter(
    connect(mapStateToProps)(({ auth }) => renderRoutes(getRoutes(auth && auth.user)))
);
