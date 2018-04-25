import * as React from "react";
import GeneralSettings from "../../components/settings/general";
import {connect} from "react-redux";

class GeneralSettingsContainer extends React.Component {
    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        console.log(data);
    };

    render () {
        return <GeneralSettings handleSubmit={this.handleSubmit} />;
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const actionCreators = {

};

export default connect(mapStateToProps, actionCreators)(GeneralSettingsContainer);
