import * as React from "react";
import {Link} from "react-router-dom";
import PetsListContainer from "../../containers/pets/pets-list-container";

export default () => {
    return (
        <div className="bg-white p-3">
            <div className="clearfix">
                Pets <Link to="/pets/add" className="float-right btn btn-sm btn-default">+ Add a pet</Link>
            </div>
            <PetsListContainer />
        </div>
    );
};