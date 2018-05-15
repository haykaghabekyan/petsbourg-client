import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import protectedRoutes from "./routes/protected";
import publicRoutes from "./routes/public";

class App extends React.Component {

    render () {
        const { me } = this.props;

        const routesToRender = me.profile ? protectedRoutes : publicRoutes;

        return renderRoutes(routesToRender);
    }
}

const mapStateToProps = (state) => {
    return {
        me: state.me
    };
};

export default withRouter(connect(mapStateToProps)(App));
