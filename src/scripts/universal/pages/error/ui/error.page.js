import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { MainLayout } from '../../../components/layouts/main';

const ErrorPageContainer = ({ me, route }) => {
    return (
        <MainLayout me={ me }>
            { renderRoutes(route.routes) }
        </MainLayout>
    );
};

const mapStateToProps = state => ({ me: state.me });

export const ErrorPage = connect(mapStateToProps)(ErrorPageContainer);
