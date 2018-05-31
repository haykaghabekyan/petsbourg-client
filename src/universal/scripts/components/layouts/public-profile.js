import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import AuthHeader from "../header/auth-header";

const PublicProfileLayout = ({ route }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    <AuthHeader showSignIn />
                </div>
            </header>
            <main className="">
                <div className="container">
                    {renderRoutes(route.routes)}
                </div>
            </main>
        </div>
    );
};

export default PublicProfileLayout;
