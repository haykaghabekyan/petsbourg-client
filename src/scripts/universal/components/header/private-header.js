import React from 'react';
// import { Dropdown } from '../dropdown';
// import { Header, Content } from '../shared/user-profile-dropdown';
import { TopSearchComponent } from './top-search';

export const PrivateHeader = () => {
    return (
        <div className="header-actions">
            <TopSearchComponent />
            {/*<div className="user-profile">*/}
                {/*<Dropdown Header={ Header } Content={ Content } className="user-profile-dropdown" />*/}
            {/*</div>*/}
        </div>
    );
};
