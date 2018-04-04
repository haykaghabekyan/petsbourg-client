import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Link, NavLink } from "react-router-dom";
import SignOutContainer from "../../containers/auth/sign-out-container";
import PetsListDropdown from "../pets/pets-list-dropdown";
import Dropdown from "../dropdown";

class Layout extends React.Component<any, any> {

    constructor (props) {
        super (props);
    }

    render () {
        const {route} = this.props;

        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/">Petsbourg</NavLink>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item dropdown open">
                            <Dropdown>
                                <PetsListDropdown />
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="/pets/add">Add Pet</Link>
                                <Link className="dropdown-item" to="/pets">Manage Pets</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="/settings">Settings</Link>
                                <div className="dropdown-divider" />
                                <SignOutContainer />
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
                <main>
                    {renderRoutes(route.routes)}
                </main>
            </div>
        );
    }
}

export default Layout;
