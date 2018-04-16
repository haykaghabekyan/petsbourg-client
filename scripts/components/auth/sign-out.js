import * as React from "react";
import {Link} from "react-router-dom";

const SignOut = ({ handleSignOutClick }) => {
    return (
        <Link to="#" onClick={handleSignOutClick}>Sign out</Link>
    );
};

export default SignOut;