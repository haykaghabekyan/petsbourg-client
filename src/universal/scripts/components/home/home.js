import React from "react";
import AddPet from "./add-pet";

const Home = ({ pets }) => {
    if (!pets.length) {
        return <AddPet />;
    }

    return (
        <div>
            This user owns pet(s).
        </div>
    );
};

export default Home;
