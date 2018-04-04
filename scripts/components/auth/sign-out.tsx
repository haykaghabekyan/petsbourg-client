import * as React from "react";

export default (props) => {
    return (
        <a onClick={props.handleSignOutClick} className="dropdown-item" href="#">Logout</a>
    );
};
