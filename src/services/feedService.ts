//import { IAnimal } from "../models/IAnimal";
//import { IAnimals } from "../models/IAnimals";

export const feedService = (lastFed:string) => {
    
    const threeHours = 1000*60*60*3;        //3 hours in millisec
    const fourHours = 1000*60*60*4;         //4 hours in millisec
    const TodaysDate = (new Date()).toISOString();
    const timeSinceFeeding = (Date.parse(TodaysDate))-(Date.parse(lastFed))
    
    if (timeSinceFeeding < threeHours) {
        return "animalFed"
    } else if (timeSinceFeeding > fourHours ) {
        return "animalStarving";
    } else { 
        return "animalHungry";
    }
}
/*
export const feedServiceBtn = (animal:IAnimal) => {
    
    const threeHours = 1000*60*60*3;        //3 hours in millisec
    const fourHours = 1000*60*60*4;         //4 hours in millisec
    const TodaysDate = (new Date()).toISOString();
    const timeSinceFeeding = (Date.parse(TodaysDate))-(Date.parse(animal.lastFed))
    
    if (timeSinceFeeding < threeHours) {
        return "animalFed"
    } else if (timeSinceFeeding > fourHours ) {
        return "animalStarving";
    } else { 
        return "animalHungry";
    }
}*/