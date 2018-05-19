import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import ProtectedHeader from "../header/protected-header";

const ProtectedProfileLayout = ({ route }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    <ProtectedHeader />
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


export default ProtectedProfileLayout;
