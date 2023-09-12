import { useLoaderData } from "react-router-dom";
import { IAnimalLoader } from "../loaders/animalLoader";
import { feedService } from "../services/feedService";
import { feedAnimal } from "./feedAnimals";
import { IAnimals } from "../models/IAnimals";
import { useState } from "react";

export const SelectedAnimal = () => {
  const [animalInState, setAminalInState] = useState<IAnimals>({
    id: "",
    name: "",
    shortDescription: "",
    imageUrl: "",
    isFed: false,
    lastFed: ""
  });

  //Ligger med just nu för att få ut Id:et.
  const { animal } = useLoaderData() as IAnimalLoader;
  
  //Använder Localstorage som datakälla.
  const animalsInLocalstorage = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  const storageAnimal: IAnimals = animalsInLocalstorage.find(
    (storageAnimal: IAnimals) => {
      if (animal.id === storageAnimal.id) {
        return true;
      }
    }
  );

  if (animalInState.name === "") {
    setAminalInState(storageAnimal);
  }
  //Sätter värdet i localstorage i state.

  const changeState = () => {

    const feedDate = new Date().toISOString();
    setAminalInState({...animalInState, isFed: true, lastFed: feedDate});
    console.log(animalInState);
  }
  
  const feed = feedService(animalInState.lastFed);
    let disable;
  if (feed === "animalFed") {
    disable = true;
  } else {
    disable = false;
  }

  return (
    <div className="animalContainer">
      <div className="animalOne" key={animalInState.id}>
        <h3 className="animalh3">{animalInState.name}</h3>
        <img
          className="animalImage"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/src/assets/staket.jpg";
          }}
          width="500"
          height="auto"
          src={animalInState.imageUrl}
        ></img>
        <p>{animalInState.shortDescription}</p>
        <button
          disabled={disable}
          onClick={() => {feedAnimal(animalInState.id); changeState();}}
          className="feedBtn"
        >
          Mata {animalInState.name}
        </button>
      </div>
    </div>
  );
};
