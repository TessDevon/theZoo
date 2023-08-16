import {Outlet} from "react-router-dom";


export const Layout = () => {
return (
    <>
        <header>
            <h1>Vårt Zoo</h1>
            <div className="nav">
                <a className="headerLink" href="">Hem</a>
                <a className="headerLink" href="">Djuren</a>
            </div>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </>
    );
};