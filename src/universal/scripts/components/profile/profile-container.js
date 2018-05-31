import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/user";
import ProfileCard from "../profile/profile-card";
import getPetIcon from "../../utils/icons/pets";

const getPicture = (pet, width=23) => {
    if (pet.picture) {
        return <img src={pet.picture} width={width} alt="" />;
    }

    const PetIcon = getPetIcon(pet.PetType.name);

    return <PetIcon width={width} />;
};

class ProfileContainer extends React.Component {

    componentDidMount () {
        const {match: { params: { userId } }} = this.props;

        this.props.getUserProfile(userId);
    }

    render () {
        const {route, user: { profile }} = this.props;

        if (!profile) {
            return <div>Loading...</div>;
        }

        if (profile === "NOT_FOUND") {
            return <div>No user found!</div>;
        }

        const { Pets } = profile;

        return (
            <div className="main-layout-page home-container">
                <div className="main-left-sidebar">
                    <ProfileCard profile={profile} />

                    <div className="pet-types-container">
                        <ul className="pet-types-list">
                            {
                                Pets.length > 0 && Pets.map((pet, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={`/${ profile.id }/${ pet.id }`} className={`pet-type-item ${ false ? "selected" : "" }`}>
                                                <div className="pet-icon">
                                                    { getPicture(pet) }
                                                </div>
                                                <div className="pet-name">{ pet.name }</div>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                </div>
                <div className="main-content">
                    {renderRoutes(route.routes, { pets: Pets })}
                </div>
                <div className="main-right-sidebar" />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const actionCreators = {
    getUserProfile,
};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
