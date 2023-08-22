import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { SelectedAnimal } from "../components/SelectedAnimal"
import { Animals } from "../components/Animals";
import { Layout } from "../components/Layout";
import { animalLoader } from "../loaders/animalLoader";

// Hantera ev fel med denna sida(Layouten).        errorElement:<NotFound></NotFound>,
//hash om den ska lanseras sen.
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
        {
            path:"/",
            element:<Home></Home>,
            index:true
        },
        {
            path:"/animals",
            element:<Animals></Animals>
        },
        {
            path:"/animal/:id",
            element:<SelectedAnimal></SelectedAnimal>,
            loader:animalLoader,
        }]
    }, 
])