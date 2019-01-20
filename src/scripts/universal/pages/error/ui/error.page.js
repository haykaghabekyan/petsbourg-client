import React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { MainLayout } from '../../../components/layouts/main';

const ErrorPageContainer = ({ auth, route }) => {
    return (
        <MainLayout user={ auth.user }>
            { renderRoutes(route.routes) }
        </MainLayout>
    );
};

const mapStateToProps = state => ({ auth: state.auth });

export const ErrorPage = connect(mapStateToProps)(ErrorPageContainer);
