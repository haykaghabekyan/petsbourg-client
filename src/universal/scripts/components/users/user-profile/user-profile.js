import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ProfileCard from "./user-profile-card";
import getPetIcon from "../../../utils/icons/pets/index";

const getPicture = (pet, width=23) => {
    if (pet.picture) {
        return <img src={pet.picture} width={width} alt="" />;
    }

    const PetIcon = getPetIcon(pet.PetType.name);

    return <PetIcon width={width} />;
};

class UserProfile extends React.Component {

    render () {
        const { user, match: { params: { petId } } } = this.props;
        const { profile } = user;

        return (
            <div className="main-layout-page home-container">
                <div className="main-left-sidebar">
                    <ProfileCard user={ user } />

                    { profile.Pets.length > 0 && <div className="pet-types-container">
                        <div className="pet-types-title">Pets</div>
                        <ul className="pet-types-list">
                            {
                                profile.Pets.map((pet, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={`/pets/${ pet.id }`} className={`pet-type-item ${ pet.id === Number(petId) ? "selected" : "" }`}>
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

                <div className="main-content" />

                <div className="main-right-sidebar">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }

}

export default withRouter(UserProfile);
