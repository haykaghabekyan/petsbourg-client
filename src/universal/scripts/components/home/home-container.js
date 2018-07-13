import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import ProfileLayout from "../layouts/profile";

const HomeContainer = ({ me, route }) => {

    const { profile, pets } = me;

    return (
        <ProfileLayout user={ me }>
            {
                renderRoutes(route.routes, {
                    pets: pets,
                })
            }
        </ProfileLayout>
    );
};

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

export default connect(mapStateToProps)(HomeContainer);
