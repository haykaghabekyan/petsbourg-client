import * as React from "react";
import {renderRoutes} from "react-router-config";
import {connect} from "react-redux";
import ProfileCardContainer from "../profile/profile-card-container";
import {Link} from "react-router-dom";

const HomeContainer = ({ route, userPets }) => {
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">
                <ProfileCardContainer />

                <div className="pet-types-container">
                    <ul className="pet-types-list">
                        {
                            userPets.map((pet, key) => {
                                return (
                                    <li key={key}>
                                        <Link to={`/pets/`} className={`pet-type-item ${ false ? "selected" : "" }`}>
                                            <div className="pet-icon">

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