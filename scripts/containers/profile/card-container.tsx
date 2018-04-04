import * as React from "react";
import {connect} from "react-redux";
import ProfileCard from "../../components/profile/card";

class CardContainer extends React.Component<any, any> {

    constructor (props) {
        super (props);
    }

    render () {
        const {user} = this.props.auth;

        return <ProfileCard user={user} />
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, null)(CardContainer);