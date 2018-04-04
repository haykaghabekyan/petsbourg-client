import * as React from "react";
import { renderRoutes } from "react-router-config";
import ProfileCardContainer from "../../containers/profile/card-container";
import PetsListShortcuts from "../pets/pets-list-shortcuts";

export default ({route}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ProfileCardContainer/>

                    <PetsListShortcuts />
                </div>
                <div className="col-md-8">
                    {renderRoutes(route.routes)}
                </div>
            </div>
        </div>
    );
};
