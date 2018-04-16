import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AddPetForm from "./add-pet-form";
import {getPetTypes} from "../../redux/actions/pets";
import getPetIcon from "../../utils/icons/pets";

const PetTypeItem = ({ petType, selected }) => {
    const PetIcon = getPetIcon(petType.name);

    return (
        <li>
            <Link to={`/pets/add/${ petType.name.toLowerCase() }`} className={`pet-type-item ${ selected ? "selected" : "" }`}>
                <div className="pet-icon">
                    <PetIcon width={30} />
                </div>
                <div className="pet-name">{petType.name}</div>
            </Link>
        </li>
    );
};

class AddPetContainer extends React.Component {

    state = {

    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.getPetTypes();
    }

    handleSubmit(data) {
        console.log(data);
    };

    render () {
        const selectedPetType = this.props.match.params.petType || null;

        return (
            <div className="main-layout-page pets-container">
                <div className="main-left-sidebar pet-types-container">
                    <ul className="pet-types-list">
                        { this.props.petTypes.map(petType => <PetTypeItem selected={petType.name.toLowerCase() === selectedPetType} petType={petType} key={petType.name} />) }
                    </ul>
                </div>
                <div className="main-content">
                    { selectedPetType ? <AddPetForm onSubmit={this.handleSubmit} petType={selectedPetType} /> : 'Select pet type' }
                </div>
                <div className="main-right-sidebar" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        petTypes: state.pets.petTypes,
        petBreeds: state.pets.petBreeds
    };
};

const actionCreators = {
    getPetTypes
};

export default connect(mapStateToProps, actionCreators)(AddPetContainer);
