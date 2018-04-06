import * as React from "react";
import { renderRoutes } from "react-router-config";

class Layout extends React.Component<any, any> {

    constructor (props) {
        super (props);
    }

    render () {
        const {route} = this.props;

        return (
            <div className="container">
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

export default Layout;
