import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import ProfileLayout from "../../layouts/profile";
import { getPet } from "../../../redux/actions/pet";
import { removeUser } from "../../../redux/actions/user";

class PetProfileContainer extends React.Component {

    componentWillMount() {
        this.props.getPet(this.props.match.params.petId);
    }

    componentWillUpdate(nextProps) {
        if (this.props.match.params.petId !== nextProps.match.params.petId) {
            this.props.getPet(nextProps.match.params.petId);
        }
    }

    componentWillUnmount() {
        this.props.removeUser();
    }

    render() {
        const { me, pet, route } = this.props;

        if (!pet.profile) {
            return <div>Loading...</div>;
        }

        return (
            <ProfileLayout userProfile={ pet.profile.owner }>
                {
                    renderRoutes(route.routes, {
                        pet: pet,
                        isEditable: me.profile && me.profile._id === pet.profile.owner._id,
                    })
                }
            </ProfileLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
        me: state.me,
        pet: state.pet,
    };
};

const actionCreators = {
    getPet,
    removeUser,
};

export default connect(mapStateToProps, actionCreators)(PetProfileContainer);
