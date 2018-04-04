import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

const drawHeader = showSignIn => {
    if (showSignIn) {
        return (
            <div className="get-started">
                Have an account? <Link to="/" className="btn btn-transparent">Sign In</Link>
            </div>
        );
    }
    return (
        <div className="get-started">
            Don't have an account? <Link to="/sign-up" className="btn btn-transparent">Sign Up</Link>
        </div>
    );
};

const Layout = ({ route }) => {
    const showSignIn = route.showSignIn || false;

    return (
        <div className="auth-layout">
            <header className="auth-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { drawHeader(showSignIn) }
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