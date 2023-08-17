import { IAnimal } from "../models/IAnimal";
import { IAnimals } from "../models/IAnimals";
import axios from "axios";

const BASEURL = "https://animals.azurewebsites.net/api/animals";

export const showAnimals = async () => {
    const response = await axios.get<IAnimals[]>(BASEURL);

    return response.data; 
}

export const showSelectedAnimal = async (id:number) => {
    const response = await axios.get<IAnimal>(`${BASEURL}i=${id}`);
    
    return response.data;
}