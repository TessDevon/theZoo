import {Outlet} from "react-router-dom";
import {Navigation} from "../components/Navigation";

export const Layout = () => {

    //useEffect 


return (
    <>
        <header>
            <h1>Vårt Zoo</h1>
            <Navigation></Navigation>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </>
    );
};