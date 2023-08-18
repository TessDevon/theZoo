import {useLoaderData} from "react-router-dom";

import { IAnimalLoader } from "../loaders/animalLoader"

export const SelectedAnimal = () => {
    const { animal } = useLoaderData() as IAnimalLoader

    //Här ska jag hämta isFed och lastFed så jag kan ändra datum och boolean
    //Ändra dessa värden
    //Spara om dem i localstorage igen
    //Sätta krav på knappen om bolean är true eller false.

    return <div className="animalContainer">
        <div className="animalOne" key={animal.id}>
            <h3>{animal.name}</h3>
            <img className="animalImage" width="500" height="auto" src={animal.imageUrl}></img>
            <p>{animal.longDescription}</p>
        <button className="feedBtn">Mata{animal.name}</button>
        </div>
    </div>
}