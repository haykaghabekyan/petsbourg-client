import React from 'react';
import { MainLayout } from '../../../components/layouts/main';

export const ContactUsPage = () => {
    const { auth } = this.props;

    return (
        <MainLayout user={ auth.user } pets={ auth.pets }>
            <div>
                Contact us
            </div>
        </MainLayout>
    );
};
