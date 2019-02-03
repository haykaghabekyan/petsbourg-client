import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import ImageIcon from "../../../utils/icons/common/image";
import { uploadUserPicture } from "../../../redux/actions/user";
import { circle } from "../../../utils/helpers/cloudinary";

class UploadUserPicture extends React.Component {
    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
    }

    onDrop(acceptedFiles) {
        const { uploadUserPicture, me } = this.props;

        if (acceptedFiles.length) {
            const formData = new FormData();

            acceptedFiles.forEach(file => {
                formData.append('picture', file);
            });

            uploadUserPicture(me.profile._id, formData);
        } else {
            console.log("onDrop error");
        }
    }

    onDropRejected() {
        console.log('onDropRejected', arguments);
    }

    render() {
        const { userProfile } = this.props;
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
                    { userProfile.picture && <img className="edit-user--img" src={ circle(userProfile.picture.publicId) } alt="" /> }
                    <div className="edit-user--icon">
                        <ImageIcon width="50%" />
                    </div>
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
    uploadUserPicture,
};

export default connect(mapStateToProps, actionCreators)(UploadUserPicture);
