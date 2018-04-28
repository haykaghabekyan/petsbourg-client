import * as React from "react";
import AddPet from "./add-pet";

const Home = (props) => {
    const { userPets } = props;

    if (!userPets.length) {
        return <AddPet />;
    }

    return (
        <div>
            This user owns pet(s).
        </div>
    );
};

export default Home;