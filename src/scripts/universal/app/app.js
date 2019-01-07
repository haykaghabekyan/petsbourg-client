import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getRoutes } from './app.routes';

const mapStateToProps = state => ({ me: state.me });

export const App = withRouter(
    connect(mapStateToProps)(({ me }) => renderRoutes(getRoutes(me && me.profile)))
);
