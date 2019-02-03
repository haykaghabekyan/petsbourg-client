import React from 'react';
import Dropzone from 'react-dropzone';
import { ImageIcon } from '../../../../utils/icons/common/image';
import { circle } from '../../../../utils/helpers/cloudinary';

export class UserPhoto extends React.Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
    }

    onDrop() {
        console.log('onDropRejected', arguments);
    }

    onDropRejected() {
        console.log('onDropRejected', arguments);
    }

    render() {
        const { photo = null } = this.props;
        return (
            <div className="margin-t-30 dropzone">
                <p className="edit-user--add-photo ">Add a profile picture</p>

                <Dropzone
                    onDrop={ this.onDrop }
                    onDropRejected={ this.onDropRejected }
                    maxSize={ 1024 * 1024 * 1024 }
                    accept="image/*"
                    multiple={ false }
                    className="edit-user--profile-photo margin-t-10 d-flex justify-center"
                    activeClassName="active"
                >
                    { photo && <img className="edit-user--img" src={ circle(photo.publicId) } alt="" /> }
                    <div className="edit-user--icon">
                        <ImageIcon width="50%" />
                    </div>
                </Dropzone>
            </div>
        );
    }
}
