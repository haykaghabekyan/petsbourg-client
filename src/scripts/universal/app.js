import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import UniversalCookies from "universal-cookie";

import protectedRoutes from "./routes/protected";
import publicRoutes from "./routes/public";

class App extends React.Component {

    render () {
        const { auth } = this.props;
        const routesToRender = auth.user ? protectedRoutes : publicRoutes;

        return renderRoutes(routesToRender);
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(connect(mapStateToProps)(App));
