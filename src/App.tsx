import { useState } from 'react'
import { RouterProvider} from "react-router-dom"
import { router } from "./models/Router"
import './App.css'
import { IAnimals } from "./models/IAnimals";
import { showAnimals } from "./services/animalService";

function App() {
  //const [count, setCount] = useState(0)

  const [animals, setAnimals] = useState<IAnimals[]>([])

  const showAnimals = async () => {
    if (animals.length ===0 ) {
      //setAnimals(await showAnimals());
      
    } else {
      return;
    }
    console.log(animals);
  };
showAnimals();
  return (
    <>
      <RouterProvider router= {router}></RouterProvider>
    </>
  );
}

export default App
