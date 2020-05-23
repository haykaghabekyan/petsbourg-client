import React from 'react';
import {Link} from 'react-router-dom';
import dogBanner from '../../../../media/images/banners/banner-dog.png';

export const CreatePetProfileDog = () => {
  return (
    <Link to="/pet/add" className="banner">
      <img className="banner-img" src={dogBanner} alt="Create pet profile"/>

      <p className="banner-create text-center">Create Your</p>
      <p className="banner-profile text-center">Pet Profile</p>

      <div className="banner-btn text-center">
        <button className="btn btn-green">Create</button>
      </div>
    </Link>
  );
};
