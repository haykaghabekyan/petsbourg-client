import * as React from "react";
import AddPet from "./add-pet";

const Home = (props) => {
    const { userPets } = props;

    if (!userPets.length) {
        return <AddPet />;
    }
};

export default Home;