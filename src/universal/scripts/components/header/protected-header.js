import React from "react";
import Dropdown from "../../utils/dropdown";
import { Header, Content } from "../shared/user-profile-dropdown";
import TopSearch from "../search/top-search";

const ProtectedHeader = () => {
    return (
        <div className="header-actions">
            <TopSearch />
            <div className="user-profile">
                <Dropdown Header={Header} Content={Content} className="user-profile-dropdown" />
            </div>
        </div>
    );
};

export default ProtectedHeader;
