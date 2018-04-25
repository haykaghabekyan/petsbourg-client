import React from "react";
import {Link} from "react-router-dom";

const SignOut = ({ handleSignOutClick }) => {
    return (
        <Link to="/sign-out" onClick={handleSignOutClick}>Sign out</Link>
    );
};

export default SignOut;