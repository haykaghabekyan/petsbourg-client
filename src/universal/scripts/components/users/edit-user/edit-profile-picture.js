import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import ImageIcon from "../../../utils/icons/common/image";
import { uploadProfilePicture } from "../../../redux/actions/user";

class EditProfilePicture extends React.Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
    }

    onDrop(acceptedFiles) {
        const { uploadProfilePicture, me } = this.props;

        if (acceptedFiles.length) {
            const formData = new FormData();

            acceptedFiles.forEach(file => {
                formData.append('profilePicture', file);
            });

            uploadProfilePicture(me.profile.id, formData);
        } else {
            console.log("onDrop error");
        }
    }

    onDropRejected() {
        console.log('onDropRejected', arguments);
    }

    render() {
        return (
            <div className="margin-t-30 dropzone">
                <p className="edit-user__add-photo ">Add a profile picture</p>

                <Dropzone
                    onDrop={ this.onDrop }
                    onDropRejected={ this.onDropRejected }
                    maxSize={ 1024 * 1024 }
                    accept="image/*"
                    multiple={ false }
                    className="edit-user__profile-photo margin-t-10 d-flex justify-center"
                >
                    <ImageIcon width="50%" />
                </Dropzone>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

const actionCreators = {
    uploadProfilePicture
};

export default connect(mapStateToProps, actionCreators)(EditProfilePicture);
