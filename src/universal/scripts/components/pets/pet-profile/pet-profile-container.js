import React from "react";
import { connect } from "react-redux";
import PetInfo from "../pet-info/pet-info";
import PetStory from "../pet-story/pet-story";

import { getPetWithUser } from "../../../redux/actions/pet";

class PetProfileContainer extends React.Component {

    componentDidMount() {
        const { match: { params: { petId } } } = this.props;

        this.props.getPetWithUser(petId);
    }

    render() {
        const { user: { profile }, match: { params: { petId } } } = this.props;
        const pet = profile && profile.Pets && profile.Pets.find(p => p.id === Number(petId));

        const story = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit libero necessitatibus porro! Accusamus iusto pariatur ratione voluptate.";

        if (!pet) {
            return <div>!pet</div>;
        }

        return (
            <div>
                <PetInfo pet={ pet } />

                <PetStory story={story} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const actionCreators = {
    getPetWithUser,
};

export default connect(mapStateToProps, actionCreators)(PetProfileContainer);
