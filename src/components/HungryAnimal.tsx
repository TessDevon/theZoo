import { feedServiceForAll } from "../services/feedService";

export const HungryAnimal = () => {
    const animalsInLocalstorage = JSON.parse(localStorage.getItem("animals")||'[]');
    const resultOfFedAll = feedServiceForAll(animalsInLocalstorage);
    let hungryanimalcontainer = "notStarving";

    resultOfFedAll.map((resultOfFedOne:string) => {
        
        if (resultOfFedOne === "animalStarving") {
            hungryanimalcontainer = "starvning" 
        } 
    })

    return (<>
        <div id = "hungryAnimalDiv" className = {hungryanimalcontainer}>
            <h2 className="hungryAnimalDivtext">Djur är hungriga!</h2>
            <p className="hungryAnimalDivtext">Djurvårdare, vi behöver er hjälp för att mata djuren. 
            Något eller några djur behöver mat omgående. </p>
        </div>
    </>)
};