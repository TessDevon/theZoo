import axios from "axios";
import { IAnimals } from "../models/IAnimals";

export interface IAnimalsLoader {
  animals: IAnimals[];
}
//Skriver om resultatet för att det ska fungera ihop. Bakas ihop i ett objekt.

export const animalsLoader = async () => {
  const response = await axios.get<IAnimals[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  const data: IAnimalsLoader = { animals: response.data };
    console.log(data)
  return data;
    
};