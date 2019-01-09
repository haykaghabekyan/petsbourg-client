import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateHeader } from '../header/private-header';
import { FooterComponent } from '../footer';

const Main = ({ children, me }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container d-flex justify-space-between align-center">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { me.profile ? <PrivateHeader /> : null }
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

const mapStateToProps = state => ({ me: state.me });
export const MainLayout = connect(mapStateToProps)(Main);
