import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import ProfileLayout from "../layouts/profile";

const HomeContainer = ({ me, route }) => {
    return (
        <ProfileLayout user={ me }>
            {
                renderRoutes(route.routes, {
                    pets: me.profile.Pets,
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
