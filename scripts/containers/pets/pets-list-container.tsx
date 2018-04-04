import * as React from "react";
import {connect} from "react-redux";
import getPetsByUserId from "../../redux/actions/pets";
import PetsList from "../../components/pets/pets-list";

interface PetsListContainerProps {
    pets?: any;
    auth?: any;
    getPetsByUserId?: any;
    props?: any;
}

class PetsListContainer extends React.Component<PetsListContainerProps, any> {
    public static defaultProps: Partial<PetsListContainerProps>  = {
        pets: []
    };

    constructor (props) {
        super (props);
    }

    componentDidMount () {
        const {auth} = this.props;

        this.props.getPetsByUserId(auth.user.id);
    }

    render () {
        const {pets} = this.props;

        return <PetsList pets={pets} />;
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets,
        auth: state.auth
    };
};

const actionCreators = {
    getPetsByUserId
};

export default connect(mapStateToProps, actionCreators)(PetsListContainer);
