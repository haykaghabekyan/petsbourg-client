import DogIcon from "./dog";
import CatIcon from "./cat";
import BirdIcon from "./bird";
import HamsterIcon from "./hamster";
import RabbitIcon from "./rabbit";
import FishIcon from "./fish";

export default (petType) => {
    switch (petType) {
        case "Dog":
            return DogIcon;
        case "Bird":
            return BirdIcon;
        case "Hamster":
            return HamsterIcon;
        case "Rabbit":
            return RabbitIcon;
        case "Fish":
            return FishIcon;
        case "Cat":
            return CatIcon;
    }
}