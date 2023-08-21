import {useLoaderData} from "react-router-dom";
import { IAnimalLoader } from "../loaders/animalLoader"
import { feedService } from "../services/feedService";
import { feedAnimal } from "./feedAnimals";
import { IAnimals } from "../models/IAnimals";

export const SelectedAnimal = () => {
    
    const { animal } = useLoaderData() as IAnimalLoader
    
    //Hämta lastfed i localstorage inte databasen. 
    const animalsInLocalstorage = JSON.parse(localStorage.getItem("animals")||'[]');
    const storageAnimal = animalsInLocalstorage.find((storageAnimal:IAnimals) => {
        if(animal.id === storageAnimal.id) {
            return true;
        }})
    animal.lastFed = storageAnimal.lastFed

    const feed = feedService(animal.lastFed);
    let disable;

    if (feed==="animalFed") {  
        disable = true;
    } else { 
        disable = false;
    }

    return <div className="animalContainer">
        <div className="animalOne" key={animal.id}>
            <h3>{animal.name}</h3>
            <img className="animalImage" 
            onError={ e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/src/assets/staket.jpg";
            }}
            width="500" height="auto" src={animal.imageUrl}></img>
            <p>{animal.longDescription}</p>
        <button 
        disabled={disable}
        onClick={()=>feedAnimal(animal.id)} 
        className="feedBtn">Mata {animal.name}</button>
        </div>
    </div>
}
