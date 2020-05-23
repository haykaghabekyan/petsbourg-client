import React from 'react';
import {connect} from 'react-redux';
import {MainLayout} from '../../../components/layouts/main';

const BecomeASitter = ({auth, route}) => {
  return (
    <MainLayout user={auth.user}>
      Become a Sitter
    </MainLayout>
  );
};

const mapStateToProps = state => ({auth: state.auth});

export const BecomeASitterPage = connect(mapStateToProps)(BecomeASitter);
