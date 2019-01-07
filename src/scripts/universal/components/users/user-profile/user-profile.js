import React from "react";

class UserProfile extends React.Component {

    render () {
        const { user } = this.props;

        return (
            <div>
                User profile
            </div>
        );
    }

}

export default UserProfile;
