import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import Dropdown from "../../utils/dropdown";
import {Header, Content} from "../shared/user-profile-dropdown";

const drawHeader = () => {
    return (
        <div className="header-actions">
            <div className="search-container">
                Search..
            </div>
            <div className="user-profile">
                <Dropdown Header={Header} Content={Content} className="user-profile-dropdown" />
            </div>
        </div>
    );
};

const Layout = ({ route }) => {
    return (
        <div className="main-layout">
            <header className="main-header">
                <div className="container">
                    <div className="brand-container">
                        <Link to="/" className="brand">Petsbourg</Link>
                    </div>
                    { drawHeader() }
                </div>
            </header>
            <main className="">
                <div className="container">
                    {renderRoutes(route.routes)}
                </div>
            </main>
        </div>
    )
};

export default Layout;
