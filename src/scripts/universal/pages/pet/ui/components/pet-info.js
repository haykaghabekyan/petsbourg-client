import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { PenIcon } from '../../../../utils/icons/common/pen';
import { thumbnail } from '../../../../utils/helpers/cloudinary';
import { getPetIcon } from '../../../../utils/icons/pets/index';

const box = (label, value) => {
    if (label !== 'Birthday') {
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
            <dd className="pet-info-value">{ moment(value).fromNow() }</dd>
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
    if (!petProfile || !petProfile.picture) {
        const PetIcon = getPetIcon(petProfile.type.name);

        return <PetIcon width={ 300 } />;
    }

    return <img className="pet-facts-img" src={ thumbnail(petProfile.picture.publicId) } />;
};

export const PetInfo = ({ pet, isEditable }) => {
    return [
        <div className="pet-profile bg-white" key="petInfo">
            <div className="padding-20">
                <div className="pet-profile-content">
                    { isEditable &&  edit(pet._id) }

                    <div className="pet-facts">
                        <div className="pet-facts-picture">
                            { profilePicture(pet) }
                        </div>
                        <div className="pet-facts-content">
                            <h2 className="pet-facts-name">{ pet.name }</h2>

                            <dl className="pet-facts-list">
                                <dt className="pet-facts-label">Passport Id</dt>
                                <dd className="pet-facts-value">{ pet.passportId || '-' }</dd>

                                <dt className="pet-facts-label">Type</dt>
                                <dd className="pet-facts-value">{ pet.type.name || '-' }</dd>

                                <dt className="pet-facts-label">Breed</dt>
                                <dd className="pet-facts-value">{ pet.breed.name || '-' }</dd>

                                <dt className="pet-facts-label">Gender</dt>
                                <dd className="pet-facts-value">{ pet.gender || '-' }</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="pet-info">
                    { pet.color && box('Color', pet.color) }
                    { pet.birthday && box('Birthday', pet.birthday) }
                    { pet.size && box('Size', pet.size) }
                </div>
            </div>
        </div>,
        <div className="pet-profile bg-white" key="petStory">
            <div className="padding-20">
                <h3 className="pet-profile-title">Pet Story</h3>
                <pre className="pet-story">{ pet.story || '-' }</pre>
            </div>
        </div>
    ];
};

PetInfo.propTypes = {
    pet: PropTypes.any,
    isEditable: PropTypes.bool,
};

PetInfo.defaultProps = {
    isEditable: false,
};
