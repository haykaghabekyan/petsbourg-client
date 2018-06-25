import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="padding-v-60">
            <h3 className="text-center">
                Go <Link to="/">home</Link>, this page isn't available!
            </h3>
            <p className="text-center margin-t-30">
                The link you followed may be broken, or the page may have been removed.
            </p>
        </div>
    );
};

export default NotFound;
