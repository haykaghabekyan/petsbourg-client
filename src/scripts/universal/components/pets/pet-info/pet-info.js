import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import PenIcon from "../../../utils/icons/common/pen";
import { thumbnail } from "../../../utils/helpers/cloudinary";
import getPetIcon from "../../../utils/icons/pets";

const box = (label, value) => {
    if (label !== "Birthday") {
        return (
            <dl className="pet-info-list">
                <dt className="pet-info-label">{ label } </dt>
                <dd className="pet-info-value">{ value }</dd>
            </dl>
        );
    }

    return (
        <dl className="pet-info-list">
            <dt className="pet-info-label">{ label } </dt>
            <dd className="pet-info-value">{ moment(value, "YYYYMMDD").fromNow() }</dd>
        </dl>
    );
};

const edit = (petId) => {
    return (
        <Link className="pet-profile-edit" to={ `/pets/${ petId }/edit` }>
            <PenIcon />
        </Link>
    );
};

const profilePicture = petProfile => {
    if(!petProfile || !petProfile.picture) {
        const PetIcon = getPetIcon(petProfile.type.name);

        return <PetIcon width={ 300 } />;
    }

    return <img className="pet-facts-img" src={ thumbnail(petProfile.picture.publicId) } />;
};

const PetInfo = ({ petProfile, isEditable }) => {
    return (
        <div className="pet-profile bg-white">
            <div className="padding-35">
                <div className="pet-profile-content">
                    { isEditable &&  edit(petProfile._id) }

                    <div className="pet-facts">
                        <div className="pet-facts-picture">
                            { profilePicture(petProfile) }
                        </div>
                        <div className="pet-facts-content">
                            <h2 className="pet-facts-name">{ petProfile.name }</h2>

                            <dl className="pet-facts-list">
                                <dt className="pet-facts-label">Passport Id</dt>
                                <dd className="pet-facts-value">{ petProfile.passportId || "-" }</dd>

                                <dt className="pet-facts-label">Type</dt>
                                <dd className="pet-facts-value">{ petProfile.type.name || "-" }</dd>

                                <dt className="pet-facts-label">Breed</dt>
                                <dd className="pet-facts-value">{ petProfile.breed.name || "-" }</dd>

                                <dt className="pet-facts-label">Gender</dt>
                                <dd className="pet-facts-value">{ petProfile.gender || "-" }</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="pet-info">
                    { petProfile.color && box("Color", petProfile.color) }
                    { petProfile.birthday && box("Birthday", petProfile.birthday) }
                    { petProfile.size && box("Size", petProfile.size) }
                </div>
            </div>
        </div>
    );
};

PetInfo.propTypes = {
    pet: PropTypes.any,
    isEditable: PropTypes.bool,
};

PetInfo.defaultProps = {
    isEditable: false,
};

export default PetInfo;