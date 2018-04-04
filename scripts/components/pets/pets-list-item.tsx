import * as React from "react";
import {Link} from "react-router-dom";

export default ({ pet }) => {
    return (
        <li>
            <Link to="/pets">{pet.name}</Link>
        </li>
    );
}
