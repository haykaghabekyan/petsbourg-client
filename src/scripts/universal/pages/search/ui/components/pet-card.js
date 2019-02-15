import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '../../../../utils/icons/common/user';

export const SearchPetCard = ({ pet }) => {
    return (
        <div className="search-page-card">
            <div className="search-page-card-photo" />
            <div className="search-page-card-pet">
                <p className="search-page-card-pet-name">
                    <b>Shan anun</b>
                </p>
                <p className="search-page-card-pet-info">Shan info</p>
            </div>
            <Link to="/" className="search-page-card-user d-flex align-center">
                                        <span className="search-page-card-user-icon">
                                            <UserIcon width={ 10 } color="white" />
                                        </span>
                <span className="search-page-card-user-name">User name</span>
            </Link>
        </div>
    );
};

