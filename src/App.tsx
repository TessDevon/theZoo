import { useEffect } from 'react'
import { RouterProvider} from "react-router-dom"
import { router } from "./models/Router"
import './App.css'
import { showAnimals } from "./services/animalService";
import { HungryAnimal } from './components/HungryAnimal';


function App() {

  useEffect (() => {
    pickAnimals();
    HungryAnimal();
  })
  
  const pickAnimals = async () => {
      const localStorageAnimals = localStorage.getItem("animals");
      if (localStorageAnimals === null) {
        const pickedAnimals = (await showAnimals());
        localStorage.setItem('animals', JSON.stringify(pickedAnimals));
      } 
  };
  
  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  );
}

export default App

