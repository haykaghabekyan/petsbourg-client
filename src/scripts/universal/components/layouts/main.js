import React from "react";
import { renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ProtectedHeader } from "../header/protected-header";
import { Footer } from "../footer";

const MainLayout = ({ route, me }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container d-flex justify-space-between align-center">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { me.profile ? <ProtectedHeader /> : null }
                </div>
            </header>
            <main className="">
                <div className="container">
                    { renderRoutes(route.routes) }
                </div>
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

export default withRouter(connect(mapStateToProps)(MainLayout));
