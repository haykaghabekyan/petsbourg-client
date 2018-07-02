import React from "react";
import { Link } from "react-router-dom";

const CreatePetProfileCat = () => {
    return (
        <Link to="/pets/add" className="banner">
            <img className="banner-img" src="/media/images/banners/banner-cat.png" alt="Create pet profile" />

            <p className="banner-create text-center">Create Your</p>
            <p className="banner-profile text-center">Pet Profile</p>

            <div className="banner-btn text-center">
                <button className="btn btn-green">Create</button>
            </div>
        </Link>
    );
};

export default CreatePetProfileCat;
