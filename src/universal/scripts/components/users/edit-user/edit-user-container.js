import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../redux/actions/user";
import EditUserForm from "./edit-user-form";

class EditUserContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        const { updateUser, me } = this.props;

        updateUser(me.profile._id, data);
    };

    render () {
        const { me } = this.props;

        return <EditUserForm userProfile={ me.profile } onSubmit={ this.handleSubmit } />;
    }
}

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

const actionCreators = {
    updateUser,
};

export default connect(mapStateToProps, actionCreators)(EditUserContainer);
