import React from 'react';
import { Link } from 'react-router-dom';
import { PrivateHeader } from '../header/private-header';
import { FooterComponent } from '../footer';

export const MainLayout = ({ children, me }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container d-flex justify-space-between align-center">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { me.profile ? <PrivateHeader user={ me } /> : null }
                </div>
            </header>
            <main className="">
                <div className="container">
                    { children }
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};
