import React from "react";

class ProfileLayout extends React.Component {

    componentDidMount () {

        console.log(this.props.match);

    }

    render () {
        return (
            <div>
                ProfileLayout
            </div>
        );
    }

}

export default ProfileLayout;
