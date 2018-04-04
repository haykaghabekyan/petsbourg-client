import * as React from "react";
import {connect} from "react-redux";
import PetTypeItem, {PetTypeItemProps} from "../../components/pets/pet-type-item";
import {addPet} from "../../redux/actions/pets";

class PetTypeItemContainer extends React.Component<PetTypeItemProps, any> {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data) {
        this.props.addPet(data);
    }

    render () {
        const {petType, petTypeId} = this.props;

        return <PetTypeItem handleSubmit={this.handleSubmit} petType={petType} toggleForm={this.props.toggleForm} petTypeId={petTypeId} />;
    }
}

const actionCreators = {
    addPet
};

export default connect(null, actionCreators)(PetTypeItemContainer) as React.ComponentClass<any>;
