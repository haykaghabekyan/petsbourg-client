import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import ImageIcon from "../../../utils/icons/common/image";
import { uploadPetPicture } from "../../../redux/actions/pet";
import { thumbnail } from "../../../utils/helpers/cloudinary";

class UploadPetPicture extends React.Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
    }

    onDrop(acceptedFiles) {
        const { uploadPetPicture, pet } = this.props;

        if (acceptedFiles.length) {
            const formData = new FormData();

            acceptedFiles.forEach(file => {
                formData.append('picture', file);
            });

            uploadPetPicture(pet.profile._id, formData);
        } else {
            console.log("onDrop error");
        }
    }

    onDropRejected() {
        console.log('onDropRejected', arguments);
    }

    render() {
        const { petProfile } = this.props;
        return (
            <div className="margin-t-30 dropzone">
                <p className="edit-pet--add-photo ">Add a profile picture</p>

                <Dropzone
                    onDrop={ this.onDrop }
                    onDropRejected={ this.onDropRejected }
                    maxSize={ 1024 * 1024 * 1024 }
                    accept="image/*"
                    multiple={ false }
                    className="edit-pet--profile-photo margin-t-10 d-flex justify-center"
                    activeClassName="active"
                >
                    `{ petProfile.picture && <img className="edit-pet--img" src={ thumbnail(petProfile.picture.publicId) } alt=""/> }
                    <div className="edit-pet--icon">
                        <ImageIcon width="50%" />
                    </div>
                </Dropzone>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pet: state.pet,
    };
};

const actionCreators = {
    uploadPetPicture,
};

export default connect(mapStateToProps, actionCreators)(UploadPetPicture);
