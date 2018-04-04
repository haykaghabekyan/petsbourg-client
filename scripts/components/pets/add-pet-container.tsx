import * as React from "react";

class AddPetContainer extends React.Component<any, any> {

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="add-pet-container">
                <div className="pet-types-container">

                </div>
                <div className="add-pet-form-container">
                    <h2>Add pet</h2>
                </div>
            </div>
        );
    }
}

export default AddPetContainer;