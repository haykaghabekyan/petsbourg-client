import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../../components/layouts/main';
import { CreatePetProfileDog } from '../../../components/banners';
import { PetAddForm } from './components/pet-add-form';
import { PetAddLoading } from './components/pet-add-loading';
import { petAddPageLoadAction, petAddPageLoadBreedsAction, petAddPageSaveAction } from '../model/pet-add.actions';
import { getPetIcon } from '../../../utils/icons/pets';

class PetAddPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.petAddPageLoadAction();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.petType !== this.props.location.petType) {
            this.props.petAddPageLoadBreedsAction(nextProps.location.petType);
        }
    }

    async handleSubmit(data, dispatch) {
        try {
            await new Promise((resolve, reject) => {
                dispatch(petAddPageSaveAction(data, { resolve, reject }));
            });
        } catch (error) {
            throw new SubmissionError({
                _error: error.message,
            });
        }
    }

    render() {
        const { auth, petAddPage, location } = this.props;

        // TODO
        if (petAddPage.error) {
            return petAddPage.error;
        }

        if (!petAddPage.opened || petAddPage.isLoading) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    <PetAddLoading />
                </MainLayout>
            );
        }

        const selectedPetType = location.petType || null;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <div className="main-layout-page add-pet-page">
                    <div className="main-left-sidebar">
                        <div className="pet-types-container">
                            <ul className="pet-types-list">
                                {
                                    petAddPage.petTypes.map((petType, key) => {
                                        const PetIcon = getPetIcon(petType.name);

                                        return (
                                            <li key={ key }>
                                                <Link to={{
                                                    pathname: '/pet/add',
                                                    petType: petType._id,
                                                }} className={`pet-type-item ${ petType._id === selectedPetType ? 'selected' : '' }`}>
                                                    <div className="pet-icon">
                                                        <PetIcon width={ 30 } />
                                                    </div>
                                                    <div className="pet-name">{ petType.name }</div>
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="main-content bg-white">
                        { this.renderContent(selectedPetType) }
                    </div>
                    <div className="main-right-sidebar">
                        <CreatePetProfileDog />
                    </div>
                </div>
            </MainLayout>
        );
    }

    renderContent(isPetTypeSelected) {
        if (!isPetTypeSelected) {
            return (
                <div className="add-pet padding-35">
                    <h3 className="add-pet-title">Please, select pet type.</h3>
                </div>
            );
        }

        const { petAddPage } = this.props;

        if (petAddPage.isLoadingBreeds || !petAddPage.petBreeds) {
            return 'Loading breeds...';
        }

        return <PetAddForm onSubmit={ this.handleSubmit } breeds={ petAddPage.petBreeds } />;
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    petAddPage: state.petAddPage,
});
const actionCreators = {
    petAddPageLoadAction,
    petAddPageLoadBreedsAction,
};

export const PetAddPage = connect(mapStateToProps, actionCreators)(PetAddPageContainer);
