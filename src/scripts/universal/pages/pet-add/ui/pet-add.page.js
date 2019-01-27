import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { CreatePetProfileDog } from '../../../components/banners';

class PetAddPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth } = this.props;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <div className="main-layout-page pets-container">
                    <div className="main-left-sidebar">
                        <div className="pet-types-container">

                        </div>
                    </div>
                    <div className="main-content bg-white">

                    </div>
                    <div className="main-right-sidebar">
                        <CreatePetProfileDog />
                    </div>
                </div>
            </MainLayout>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    petAddPage: state.petAddPage,
});
const actionCreators = {};

export const PetAddPage = connect(mapStateToProps, actionCreators)(PetAddPageContainer);
