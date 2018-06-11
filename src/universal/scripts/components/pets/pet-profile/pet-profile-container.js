import React from "react";
import { connect } from "react-redux";
import PetInfo from "./pet-info";
import PetStory from "./pet-story";
import PetPhotos from "./pet-photos";

class PetProfileContainer extends React.Component {

    render () {
        const { user: { profile }, match: { params: { petId } } } = this.props;
        const pet = profile.Pets && profile.Pets.find(p => p.id === Number(petId));

        const story = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit libero necessitatibus porro! Accusamus iusto pariatur ratione voluptate." +
            "Asperiores eligendi expedita explicabo iure non quaerat, sit! Enim iusto libero rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit libero necessitatibus porro! Accusamus iusto pariatur ratione voluptate. Asperiores eligendi expedita explicabo iure non quaerat, sit! Enim iusto libero rerum?"

        return (
            <div>
                <PetInfo pet={ pet } />

                <PetStory story={story} />

                {/*<PetPhotos />*/}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(PetProfileContainer);
