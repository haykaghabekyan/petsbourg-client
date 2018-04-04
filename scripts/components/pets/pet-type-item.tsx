import * as React from "react";
import PetTypeForm from "./pet-type-form";

export interface PetTypeItemProps {
    petType: any;
    toggleForm: any;
    petTypeId: any;
    handleSubmit: any;
    addPet?: any;
}

class PetTypeItem extends React.Component<PetTypeItemProps, any> {

    constructor (props) {
        super (props);

        this.handlePetTypeClick = this.handlePetTypeClick.bind(this);
    }

    handlePetTypeClick () {
        if (!this.props.petType.formDisplayed) {
            this.props.toggleForm(this.props.petTypeId);
        }
    }

    render () {
        const {petType, handleSubmit} = this.props;
        return (
            <div className={"pet-type-item " + (petType.formDisplayed ? "show" : "")} onClick={this.handlePetTypeClick}>
                <div className="pet-type-facade">
                    <div className="text-center pet-type-icon-container">
                        <img src={petType.icon} alt={petType.name} className="pet-type-icon" />
                    </div>
                    <div className="text-center">
                        {petType.name}
                    </div>
                </div>
                <div className="pet-type-form">
                    <PetTypeForm petType={petType} onSubmit={handleSubmit} />
                </div>
            </div>
        );
    }
}

export default PetTypeItem;