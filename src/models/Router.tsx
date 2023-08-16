import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Animal } from "../components/Animal";
import { Animals } from "../components/Animals";
import { Layout } from "../components/Layout";


// Hantera ev fel med denna sida.        errorElement:<NotFound></NotFound>,


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
            path:"/animal/id",
            element:<Animal></Animal>
        }]
    }, 
])