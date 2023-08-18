import { IAnimals } from "../models/IAnimals";
import { useNavigate } from "react-router-dom"

    interface IAnimalsProps {
    animals: IAnimals[];
}

export const Animal = ({animals}: IAnimalsProps) => {
const navigate = useNavigate();


const handleClick = (id:string) => {
    navigate("/animal/" + id);
}    
    
    
    
    
    return (
        <>
        <section className="helpAnimaltext">
            <h2>Hjälp oss mata hungriga djur.</h2>
            <p>De djur med gul eller röd bakgrund behöver din hjälp med mat.</p>
            </section>
            {animals.map((animal:IAnimals) => (
                <div onClick={()=>handleClick(animal.id)} className="animalDivs" key={animal.id}>
                    <h3>{animal.name}</h3>
                    <img className="animalImage" width="500" height="auto" src={animal.imageUrl}></img>
                    <p>{animal.shortDescription}</p>
                </div>
            ))}
        </>
        );
    };
