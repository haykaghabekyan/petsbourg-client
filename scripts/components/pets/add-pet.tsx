import * as React from "react";
import * as _ from "lodash";
import PetTypeItemContainer from "../../containers/pets/pet-type-item-container";
import PetTypeItem from "./pet-type-item";

const PET_TYPES = [{
    name: "Dog",
    icon: "../images/pet-types/dog.png",
    breeds: [{
        name: "German Shepherd",
        value: "German Shepherd"
    }, {
        name: "Labrador Retriever",
        value: "Labrador Retriever"
    }, {
        name: "Rottweiler",
        value: "Rottweiler"
    }, {
        name: "Beagle",
        value: "Beagle"
    }, {
        name: "Bulldog",
        value: "Bulldog"
    }],
    formDisplayed: false
}, {
    name: "Cat",
    icon: "../images/pet-types/cat.png",
    breeds: [],
    formDisplayed: false
}, {
    name: "Bird",
    icon: "../images/pet-types/parrot.png",
    breeds: [],
    formDisplayed: false
}, {
    name: "Fish",
    icon: "../images/pet-types/fish.png",
    breeds: [],
    formDisplayed: false
}, {
    name: "Hamster",
    icon: "../images/pet-types/hamster.png",
    breeds: [],
    formDisplayed: false
}, {
    name: "Rabbit",
    icon: "../images/pet-types/kangoroo.png",
    breeds: [],
    formDisplayed: false
}];

class AddPet extends React.Component<any, any> {

    state = {
        petTypes: _.cloneDeep(PET_TYPES)
    };

    constructor (props) {
        super (props);

        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm (petTypeId) {

        const newState = {
            petTypes: _.cloneDeep(PET_TYPES)
        };

        newState.petTypes[petTypeId].formDisplayed = true;

        this.setState(newState);

    }

    render () {
        const { petTypes } = this.state;

        return (
            <div className="container">
                <h2>Add a pet</h2>
                <p>Give your pet a voice on the Internet and connect with the people who matter to you.</p>
                <p>It's free to set up. Just choose a pet type to get started.</p>

                <div className="pets-types-list">
                    {petTypes.map((petType, key) => <PetTypeItemContainer key={key} petTypeId={key} toggleForm={this.toggleForm} petType={petType} />)}
                </div>
            </div>
        );
    }
}

export default AddPet;