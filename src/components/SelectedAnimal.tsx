import {useLoaderData} from "react-router-dom";
import { IAnimalLoader } from "../loaders/animalLoader"
//import { IAnimals } from "../models/IAnimals";
import { feedAnimal } from "../services/feedAnimals";

    //Sätta krav på knappen om bolean är true eller false.

export const SelectedAnimal = () => {
    const { animal } = useLoaderData() as IAnimalLoader

    return <div className="animalContainer">
        <div className="animalOne" key={animal.id}>
            <h3>{animal.name}</h3>
            <img className="animalImage" width="500" height="auto" src={animal.imageUrl}></img>
            <p>{animal.longDescription}</p>
        <button onClick={()=>feedAnimal(animal.id)} className="feedBtn">Mata {animal.name}</button>
        </div>
    </div>
}
