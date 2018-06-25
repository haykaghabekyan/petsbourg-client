import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import AuthHeader from "../header/auth-header";
import Footer from "../shared/footer";

const Layout = ({ route }) => {
    const showSignIn = route.showSignIn || false;

    return (
        <div className="auth-layout">
            <header className="main-header">
                <div className="container d-flex justify-space-between align-center">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    <AuthHeader showSignIn={showSignIn} />
                </div>
            </header>
            <main className="">
                <div className="container index-page">
                    <div className="get-started-container" />
                    { renderRoutes(route.routes) }
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default Layout;
