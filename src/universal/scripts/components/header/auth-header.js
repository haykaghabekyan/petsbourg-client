import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = ({ showSignIn = false }) => {
    if (showSignIn) {
        return (
            <div className="header-actions auth-actions">
                Have an account? <Link to="/" className="btn btn-transparent">Sign In</Link>
            </div>
        );
    }
    return (
        <div className="header-actions auth-actions">
            Don't have an account? <Link to="/sign-up" className="btn btn-transparent">Sign Up</Link>
        </div>
    );
};

export default AuthHeader;
