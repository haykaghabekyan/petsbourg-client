import React from "react";
import { renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthHeader from "../header/auth-header";
import ProtectedHeader from "../header/protected-header";

const MainLayout = ({ route, me }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { me.profile ? <ProtectedHeader /> : <AuthHeader showSignIn /> }
                </div>
            </header>
            <main className="">
                <div className="container">
                    { renderRoutes(route.routes) }
                </div>
            </main>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

export default withRouter(connect(mapStateToProps)(MainLayout));
