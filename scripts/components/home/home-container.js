import * as React from "react";
import {renderRoutes} from "react-router-config";
import {connect} from "react-redux";
import ProfileCardContainer from "../profile/profile-card-container";

const HomeContainer = ({ route, userPets }) => {
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">
                <ProfileCardContainer />
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