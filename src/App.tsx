import { useState, useEffect } from 'react'
import { RouterProvider} from "react-router-dom"
import { router } from "./models/Router"
import './App.css'
import { IAnimals } from "./models/IAnimals";
import { showAnimals } from "./services/animalService";
//import { Animals } from './components/Animals';
//import { Layout } from './components/Layout';

function App() {

  const [animals, setAnimals] = useState<IAnimals[]>([]);

  useEffect (() => {
    pickAnimals();
  })
  
  const pickAnimals = async () => {
    if (animals.length === 0 ) {
      const localStorageAnimals = localStorage.getItem("animals");

      if (localStorageAnimals === null) {
        const pickedAnimals = (await showAnimals());
        localStorage.setItem('animals', JSON.stringify(pickedAnimals));
        setAnimals(pickedAnimals);
      } else {
        const animalsInLocalstorage = JSON.parse(localStorageAnimals || "[]");
          if(animalsInLocalstorage) {
            setAnimals(animalsInLocalstorage);
          } 
      }
    } 
    console.log(animals);
  };
  

  /*<Animals animals={animals}></Animals>*/
  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  );
}

export default App

/** Plan att fixa till uppgiften till denna vecka:
 * Planera upp uppgiften - KLAR
 * Addera komponenter jag kommer behöva i projektet - KLAR
 * Få rätt på routs och se till att de visas rätt sidor vid ändring i URLen - KLAR
 * Få rätt på hämtning - KLAR
 * Spara i Localstorage - KLAR
 * Koppla länken med djur till sidan och funktionen som hämtar från localstorage - KLAR
 * Skriv djuren på sidan med animals - KLAR
 * Lägg till styling. -KLAR
 * 
 * Flytta över enskillda djur till egen komponent!! - under process
 * 
 * Fixa olika bakgrund med olika klasser som ska ändras utifrån tid. Matad grön, 3h gul, 4h röd.
 * Gå igenom uppgiften igen
 * Kolla över möjligheten att göra annan sida för enskilt djur - utan routs
 * */