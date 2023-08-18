import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { BASEURL } from "../services/animalService";

export interface IAnimalLoader {
  animal: IAnimal;
}

export const animalLoader = async ({params}:any) => {
    const response = await axios.get<IAnimal>
    (`${BASEURL}` + params.id);

    const data: IAnimalLoader = {animal: response.data};
    return data;
}

