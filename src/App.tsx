//import { useState } from 'react'
import { RouterProvider} from "react-router-dom"
import { router } from "./models/Router"
import './App.css'
//import { IAnimals } from "./models/IAnimals";
//import { showAnimals } from "./services/animalService";


function App() {
  //const [count, setCount] = useState(0)
/*
  const [animals, setAnimals] = useState<IAnimals[]>([])

  const showAnimals = async () => {
    if (animals.length ===0 ) {
      //setAnimals(await showAnimals());
      
    } else {
      return;
    }
    console.log(animals);
  };*/
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
 * 
 * Få rätt på hämtning - under process
 * Koppla länken med djur till sidan och funktionen som hämtar - under process
 * Spara i Localstorage - under process
 * 
 * Props med info till animals
 * Skriv djuren på sidan med animals
 * Lägg till styling. Även bakgrund med olika klasser som ska ändras utifrån tid. Matad grön, 3h gul, 4h röd.
 */