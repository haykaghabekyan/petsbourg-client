import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { MainLayout } from '../../../components/layouts/main';
import { petEditPageLoadAction, petEditPageResetAction, petEditPageUpdateAction } from '../model/pet-edit.actions';
import { ProfileLayout } from '../../../components/layouts/profile';
import { LoadingLayout } from '../../../components/layouts/loading';
import { PetInfoForm } from './components/pet-info-form';

class PetEditPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { petEditPage, match } = this.props;

        if (!petEditPage.opened) {
            this.props.petEditPageLoadAction(match.params);
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.petId !== newProps.match.params.petId) {
            this.props.petEditPageLoadAction(newProps.match.params);
        }
    }

    async handleSubmit(data, dispatch) {
        try {
            await new Promise((resolve, reject) => {
                dispatch(petEditPageUpdateAction(data, { resolve, reject }));
            });
        } catch (error) {
            throw new SubmissionError({
                _error: error.message,
            });
        }
    }

    render() {
        const { auth, petEditPage } = this.props;

        // TODO
        if (petEditPage.error) {
            return petEditPage.error;
        }

        if (!petEditPage.opened || petEditPage.isLoading) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        const isEditable = auth.user && petEditPage.user && auth.user._id === petEditPage.user._id;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <ProfileLayout user={ petEditPage.user } pets={ petEditPage.pets } isEditable={ isEditable } selectedPetId={ petEditPage.pet._id }>
                    <PetInfoForm
                        pet={ petEditPage.pet }
                        petTypes={ [] }
                        petBreeds={ [] }
                        onSubmit={ this.handleSubmit }
                    />
                </ProfileLayout>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.petEditPageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    petEditPage: state.petEditPage,
});
const actionCreators = {
    petEditPageLoadAction,
    petEditPageResetAction,
};

export const PetEditPage = connect(mapStateToProps, actionCreators)(PetEditPageContainer);
