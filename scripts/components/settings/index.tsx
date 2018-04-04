import * as React from "react";
import {Link,} from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default ({route}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-settings-card bg-white pt-2">
                        <h3 className="text-center">Profile</h3>

                        <div className="profile-settings-avatar">

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/settings/security">Security</Link>
                        </li>
                    </ul>

                    <div className="bg-white p-3">
                        {renderRoutes(route.routes)}
                    </div>
                </div>
            </div>
        </div>
    );
};
