import { IAnimals } from "../models/IAnimals";
import axios from "axios";

export const BASEURL = "https://animals.azurewebsites.net/api/animals/";

export const showAnimals = async () => {
    const response = await axios.get<IAnimals[]>(BASEURL);

    return response.data; 
}
