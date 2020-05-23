import React from 'react';
import {connect} from 'react-redux';
import {SubmissionError} from 'redux-form';
import {MainLayout} from '../../../components/layouts/main';
import {userEditPageLoadAction, userEditPageResetAction, userEditPageSaveAction} from '../model/user-edit.actions';
import {ProfileLayout} from '../../../components/layouts/profile';
import {LoadingLayout} from '../../../components/layouts/loading';
import {UserEditForm} from './components/user-edit-form';

export class UserEditPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {userEditPage, match} = this.props;

    if (!userEditPage.opened) {
      this.props.userEditPageLoadAction(match.params);
    }
  }

  // onDrop(acceptedFiles) {
  //     const { uploadUserPicture, me } = this.props;
  //
  //     if (acceptedFiles.length) {
  //         const formData = new FormData();
  //
  //         acceptedFiles.forEach(file => {
  //             formData.append('picture', file);
  //         });
  //
  //         uploadUserPicture(me.profile._id, formData);
  //     } else {
  //         console.log("onDrop error");
  //     }
  // }

  async handleSubmit(data, dispatch) {
    const promise = new Promise((resolve, reject) => {
      dispatch(userEditPageSaveAction(data, {resolve, reject}));
    });

    promise
      .then(() => {
        // TODO
      })
      .catch(error => {
        throw new SubmissionError({
          _error: error.message,
        });
      });
  }

  render() {
    const {auth, userEditPage} = this.props;

    // TODO
    if (userEditPage.error) {
      return (
        <MainLayout user={auth.user} pets={auth.pets}>
          {userEditPage.error}
        </MainLayout>
      );
    }

    if (!userEditPage.opened || userEditPage.isLoading) {
      return (
        <MainLayout user={auth.user} pets={auth.pets}>
          <LoadingLayout/>
        </MainLayout>
      );
    }

    return (
      <MainLayout user={auth.user} pets={auth.pets}>
        <ProfileLayout user={userEditPage.user} pets={userEditPage.pets} isEditable>
          <UserEditForm onSubmit={this.handleSubmit} user={userEditPage.user}/>
        </ProfileLayout>
      </MainLayout>
    );
  }

  componentWillUnmount() {
    this.props.userEditPageResetAction();
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  userEditPage: state.userEditPage,
});
const actionCreators = {
  userEditPageLoadAction,
  userEditPageResetAction,
};

export const UserEditPage = connect(mapStateToProps, actionCreators)(UserEditPageContainer);
