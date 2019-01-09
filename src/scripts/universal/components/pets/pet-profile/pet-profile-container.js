import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { ProfileLayout } from "../../layouts/profile";
import { getPet } from "../../../redux/actions/pet";
import { removeUser } from "../../../redux/actions/user";
import ProfileLoadingLayout from "../../layouts/profile-loading";

class PetProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
        const { isFetching } = pet;

        if (isFetching) {
            return <ProfileLoadingLayout />;
        }

        if (!pet.profile) {
            return <div>not found</div>;
        }

        return (
            <ProfileLayout userProfile={ pet.profile.owner } selectedPetId={ pet.profile._id }>
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
