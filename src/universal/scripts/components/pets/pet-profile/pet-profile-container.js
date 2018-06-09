import React from "react";
import PetInfo from "./pet-info";
import PetStory from "./pet-story";
import PetPhotos from "./pet-photos";

class PetProfileContainer extends React.Component {
    render () {
        const story = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit libero necessitatibus porro! Accusamus iusto pariatur ratione voluptate." +
            "Asperiores eligendi expedita explicabo iure non quaerat, sit! Enim iusto libero rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit libero necessitatibus porro! Accusamus iusto pariatur ratione voluptate. Asperiores eligendi expedita explicabo iure non quaerat, sit! Enim iusto libero rerum?"

        return (
            <div>
                <PetInfo />

                <PetStory story={story} />

                <PetPhotos />
            </div>
        );
    }
}

export default PetProfileContainer;