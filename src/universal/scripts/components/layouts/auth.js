import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import AuthHeader from "../header/auth-header";

const Layout = ({ route }) => {
    const showSignIn = route.showSignIn || false;

    return (
        <div className="auth-layout">
            <header className="main-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    <AuthHeader showSignIn={showSignIn} />
                </div>
            </header>
            <main className="">
                <div className="container index-page">
                    <div className="get-started-container" />
                    {renderRoutes(route.routes)}
                </div>
            </main>
        </div>
    )
};

export default Layout;