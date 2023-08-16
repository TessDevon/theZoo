import {Outlet} from "react-router-dom";


export const Layout = () => {
return (
    <>
        <header>
            <h1>Vårt Zoo</h1>
            <a href="">Hem</a>
            <a href="">Djuren</a>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </>
    );
};