import React from "react";
import Dropdown from "../../utils/dropdown";
import {Header, Content} from "../shared/user-profile-dropdown";

const ProtectedHeader = () => {
    return (
        <div className="header-actions">
            <div className="search-container">
                Search..
            </div>
            <div className="user-profile">
                <Dropdown Header={Header} Content={Content} className="user-profile-dropdown" />
            </div>
        </div>
    );
};

export default ProtectedHeader;
