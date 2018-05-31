import * as React from "react";
import {Link} from "react-router-dom";

export default () => {
    return (
        <div>
            <h1>Go <Link to="/">home</Link>, you are drunk!</h1>
        </div>
    );
}