import { useState, useEffect } from 'react'
import { RouterProvider} from "react-router-dom"
import { router } from "./models/Router"
import './App.css'
import { IAnimals } from "./models/IAnimals";
import { showAnimals } from "./services/animalService";


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
  
  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  );
}

export default App

