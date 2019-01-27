import React from 'react';
import { Link } from 'react-router-dom';
import catBanner from '../../../../media/images/banners/banner-cat.png';

export const CreatePetProfileCat = () => {
    return (
        <Link to="/pet/add" className="banner">
            <img className="banner-img" src={ catBanner } alt="Create pet profile" />

            <p className="banner-create text-center">Create Your</p>
            <p className="banner-profile text-center">Pet Profile</p>

            <div className="banner-btn text-center">
                <button className="btn btn-green">Create</button>
            </div>
        </Link>
    );
};
