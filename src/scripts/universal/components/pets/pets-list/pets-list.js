import React from "react";

const PetsList = ({ children }) => {
    return (
        <ul className="pets-list">{ children }</ul>
    );
};

export default PetsList;