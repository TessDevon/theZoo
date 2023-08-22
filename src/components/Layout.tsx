import {Outlet} from "react-router-dom";
import {Navigation} from "../components/Navigation";
import { HungryAnimal } from "./HungryAnimal";

export const Layout = () => {


return (
    <>
        <header>
            <h1>Vårt Zoo</h1>
            <Navigation></Navigation>
        </header>
        <main>
            <HungryAnimal></HungryAnimal>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </>
    );
};