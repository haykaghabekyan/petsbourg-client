import React from 'react';
import {connect} from 'react-redux';
import {MainLayout} from '../../../components/layouts/main';

export const ContactUs = ({auth}) => {
  return (
    <MainLayout user={auth.user} pets={auth.pets}>
      <div>
        For cooperation requests you can contact us by <a href="mailto:haykaghabekyan@gmail.com">haykaghabekyan@gmail.com</a> email address.
      </div>
    </MainLayout>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export const ContactUsPage = connect(mapStateToProps)(ContactUs);
