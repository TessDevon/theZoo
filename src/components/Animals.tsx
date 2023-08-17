//import { IAnimals } from "../models/IAnimals";
import { Animal } from "../components/Animal";
//import { IAnimals } from "../models/IAnimals";


export const Animals = () => {
const animalsInLocalstorage = JSON.parse(localStorage.getItem("animals")||'[]');
    console.log(animalsInLocalstorage);
    const animals = animalsInLocalstorage;

    return (
        <section className="animalSection">
            <Animal animals={animals}></Animal>
        </section>
    );
};

