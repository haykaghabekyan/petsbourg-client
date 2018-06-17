import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import ProfileLayout from "../../layouts/profile";
import { getPetWithUser } from "../../../redux/actions/pet";
import { removeUser } from "../../../redux/actions/user";

class PetProfileContainer extends React.Component {

    componentWillMount() {
        this.props.getPetWithUser(this.props.match.params.petId);
    }

    componentWillUpdate(nextProps) {
        if (this.props.match.params.petId !== nextProps.match.params.petId) {
            this.props.getPetWithUser(nextProps.match.params.petId);
        }
    }

    componentWillUnmount() {
        this.props.removeUser();
    }

    render() {
        const { me, user, route } = this.props;

        if ((!user.profile && !user.pet) || user.isFetching) {
            return <div>Loading...</div>;
        }

        return (
            <ProfileLayout user={ user }>
                {
                    renderRoutes(route.routes, {
                        pet: user.pet,
                        isEditable: me.profile && user.profile && me.profile.id === user.profile.id,
                    })
                }
            </ProfileLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
        me: state.me,
        user: state.user,
    };
};

const actionCreators = {
    getPetWithUser,
    removeUser,
};

export default connect(mapStateToProps, actionCreators)(PetProfileContainer);
