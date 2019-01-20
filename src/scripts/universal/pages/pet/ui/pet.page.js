import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { petPageLoadAction, petPageResetAction } from '../model/pet.actions';
import { ProfileLayout } from '../../../components/layouts/profile';
import { LoadingLayout } from '../../../components/layouts/loading';

class PetPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { petPage, match } = this.props;

        if (!petPage.opened) {
            this.props.petPageLoadAction(match.params);
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.petId !== newProps.match.params.petId) {
            this.props.petPageLoadAction(newProps.match.params);
        }
    }

    render() {
        const { auth, petPage } = this.props;

        if (!petPage.opened || petPage.isLoading) {
            return (
                <MainLayout>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        const allowEdit = auth.user && petPage.user && auth.user._id === petPage.user._id;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <ProfileLayout user={ petPage.user } pets={ petPage.pets } allowEdit={ allowEdit } selectedPetId={ petPage.pet._id }>
                    pet page
                </ProfileLayout>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.petPageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    petPage: state.petPage,
});
const actionCreators = {
    petPageLoadAction,
    petPageResetAction,
};

export const PetPage = connect(mapStateToProps, actionCreators)(PetPageContainer);
