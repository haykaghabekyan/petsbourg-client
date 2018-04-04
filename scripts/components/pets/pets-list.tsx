import * as React from "react";
import PetListItem from "./pets-list-item";

export default ({ pets }) => {

    return (
        <ul className="pets-list list-unstyled">
            {
                pets.map((pet, key) => {
                    return <PetListItem key={key} pet={pet}/>;
                })
            }
        </ul>
    );

};
