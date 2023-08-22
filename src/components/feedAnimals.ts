import { IAnimals } from "../models/IAnimals";

export const feedAnimal = (animalId: string) => {
  const feedDate = new Date().toISOString();

  const localStorageAnimals = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );
  const NewLocalStorageAnimals = localStorageAnimals.map((animal: IAnimals) => {
    if (animal.id === animalId) {
      return { ...animal, isFed: true, lastFed: feedDate };
    } else {
      return animal;
    }
  });
  localStorage.setItem("animals", JSON.stringify(NewLocalStorageAnimals));
  location.reload();
};
