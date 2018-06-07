import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ProfileCard from "../profile/profile-card";
import getPetIcon from "../../utils/icons/pets";

const getPicture = (pet, width=23) => {
    if (pet.picture) {
        return <img src={pet.picture} width={width} alt="" />;
    }

    const PetIcon = getPetIcon(pet.PetType.name);

    return <PetIcon width={width} />;
};

class ProfileLayout extends React.Component {

    render () {
        const { children, user, match: { params } } = this.props;
        const { profile, pets } = user;
        const { petId = null } = params;

        return (
            <div className="main-layout-page home-container">
                <div className="main-left-sidebar">
                    <ProfileCard user={ user } />

                    { pets.length > 0 && <div className="pet-types-container">
                        <div className="pet-types-title">Pets</div>
                        <ul className="pet-types-list">
                            {
                                pets.map((pet, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={`/${ profile.id }/${ pet.id }`} className={`pet-type-item ${ pet.id === Number(petId) ? "selected" : "" }`}>
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
                    </div>}
                </div>
                <div className="main-content">
                    { children }
                </div>
                <div className="main-right-sidebar">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }

}

export default withRouter(ProfileLayout);
