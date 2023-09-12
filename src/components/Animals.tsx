import { useState } from "react";
import { Animal } from "../components/Animal";
import { IAnimals } from "../models/IAnimals";


export const Animals = (NewLocalStorageAnimals:[]) => {

  const [animals, setAnimals] = useState<IAnimals[]>([]);

  if (animals.length === 0 ) {

  const animalsInLocalstorage = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  setAnimals(animalsInLocalstorage);
  //const animals = animalsInLocalstorage;
  }
  if (NewLocalStorageAnimals.length < 0) {
    setAnimals(NewLocalStorageAnimals);
  }

  return (
    <section className="animalSection">
      <Animal animals={animals}></Animal>
    </section>
  );
};

