import { IAnimals } from "../models/IAnimals";
import { useNavigate } from "react-router-dom";
import { feedService } from "../services/feedService";
interface IAnimalsProps {
  animals: IAnimals[];
}

export const Animal = ({ animals }: IAnimalsProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate("/animal/" + id);
  };

  return (
    <>
      <section className="helpAnimaltext">
        <h2>Hjälp oss mata hungriga djur.</h2>
        <p className="animalInfoText">
          De djur med gul eller röd bakgrund behöver din hjälp med mat. Tryck på
          djuren för att se mer info och för att mata dem.
        </p>
      </section>
      {animals.map((animal: IAnimals) => (
        <div
          onClick={() => handleClick(animal.id)}
          className={"animalDivs " + feedService(animal.lastFed)}
          key={animal.id}
        >
          <h3>{animal.name}</h3>
          <img
            className="animalImage"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/src/assets/staket.jpg";
            }}
            width="500"
            height="auto"
            src={animal.imageUrl}
          ></img>
          <p>{animal.shortDescription}</p>
        </div>
      ))}
    </>
  );
};
