import axios from "axios";
import { IAnimals } from "../models/IAnimals";
//import { IAnimal } from "../models/IAnimal";
//import { IOmdbResponse } from "../models/IOmdbResponse";

export interface IAnimalsLoader {
  animals: IAnimals[];
}

export const animalsLoader = async () => {
  const response = await axios.get<IAnimals[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  const data: IAnimalsLoader = { animals: response.data };
    console.log(data)
  return data;
    
};