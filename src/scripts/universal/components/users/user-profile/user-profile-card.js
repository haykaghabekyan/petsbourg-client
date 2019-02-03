import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '../../../utils/icons/common/user';
import { PenIcon } from '../../../utils/icons/common/pen';
import { MessageIcon } from '../../../utils/icons/common/message';
import { PhoneIcon } from '../../../utils/icons/common/phone';
import { EnvelopeIcon } from '../../../utils/icons/common/envelope';
import { circle } from '../../../utils/helpers/cloudinary';

const renderPhoto = user => {
    if (!user.photo) {
        return <UserIcon width={ 18 } color="#fff" />;
    }

    return <img className="profile-card--picture" src={ circle(user.photo.publicId) } alt="" />;
};

const renderEditLink = user => {
    return (
        <Link to={`/users/${ user._id }/edit`} className="profile-card--edit">
            <PenIcon color="#E0E4E9" />
        </Link>
    );
};

const renderBiography = biography => {
    return <div className="profile-card--biography">{ biography }</div>;
};

const renderContacts = () => {
    return (
        <div className="profile-card--contacts">
            <div>
                <MessageIcon width={ 15 } />
            </div>
            <div>
                <PhoneIcon width={ 12 } />
            </div>
            <div>
                <EnvelopeIcon width={ 15 } />
            </div>
        </div>
    );
};

export const UserProfileCard = ({ user, isEditable }) => {
    return (
        <div className="profile-card">
            { isEditable && renderEditLink(user) }
            <div className="profile-card--content">
                <div className="d-flex justify-center">
                    <div className="profile-card--avatar d-flex justify-center align-center">
                        { renderPhoto(user) }
                    </div>
                </div>
                <div className="profile-card--user">
                    <div className="profile-card--name">
                        <Link to={ `/users/${ user._id }` }>{ `${ user.firstName } ${ user.lastName }` }</Link>
                    </div>
                    { user.biography && renderBiography(user.biography) }
                    { !isEditable && renderContacts() }
                </div>
            </div>
        </div>
    );
};
