import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import PenIcon from "../../../utils/icons/common/pen";

const box = (label, value) => {

    if (label === "Birthday") {
        return (
            <dl className="pet-info-list">
                <dt className="pet-info-label">{ label } </dt>
                <dd className="pet-info-value">{ moment(value, "YYYYMMDD").fromNow() }</dd>
            </dl>
        );
    }

    return (
        <dl className="pet-info-list">
            <dt className="pet-info-label">{ label } </dt>
            <dd className="pet-info-value">{ value }</dd>
        </dl>
    );
};

const PetInfo = ({ petProfile, isEditable }) => {
    return (
        <div className="pet-profile bg-white">
            <div className="padding-35">
                <div className="pet-profile-content">

                    {
                        isEditable &&
                        <Link className="pet-profile-edit" to={ `/pets/${ petProfile._id }/edit` }>
                            <PenIcon />
                        </Link>
                    }

                    <div className="pet-facts">
                        <div className="pet-facts-picture">
                            <img className="pet-facts-img" src="/media/images/fake-dog/5.jpeg" />
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