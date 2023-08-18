import { Animal } from "../components/Animal";

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

