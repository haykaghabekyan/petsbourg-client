import * as React from "react";
import SecuritySettings from "../../components/settings/security";
import {connect} from "react-redux";

class GeneralSettingsContainer extends React.Component {
    constructor (props) {
        super (props);
    }

    handleSubmit = (data) => {
        console.log(data);
    };

    render () {
        return <SecuritySettings />;
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
