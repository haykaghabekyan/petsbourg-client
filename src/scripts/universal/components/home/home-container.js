import React from "react";
import {renderRoutes} from "react-router-config";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProfileCardContainer from "../profile/profile-card-container";
import getPetIcon from "../../utils/icons/pets";

const getPicture = (pet, width=23) => {
    if (pet.picture) {
        return <img src={pet.picture} width={width} alt="" />;
    }

    const PetIcon = getPetIcon(pet.PetType.name);

    return <PetIcon width={width} />;
};

const HomeContainer = ({ route, userPets }) => {
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">
                <ProfileCardContainer />

                <div className="pet-types-container">
                    <ul className="pet-types-list">
                        {
                            userPets && userPets.map((pet, key) => {
                                return (
                                    <li key={key}>
                                        <Link to={`/pets/${ pet.id }`} className={`pet-type-item ${ false ? "selected" : "" }`}>
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
                {renderRoutes(route.routes, { userPets })}
            </div>
            <div className="main-right-sidebar" />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userPets: state.pets.userPets,
    };
};

export default connect(mapStateToProps)(HomeContainer);