import {Outlet, Link} from "react-router-dom";


export const Layout = () => {

    //useEffect 


return (
    <>
        <header>
            <h1>Vårt Zoo</h1>
            <ul className="nav">
                <li className="headerLink"><Link className="Link" to="/">Home</Link></li>
                <li className="headerLink"><Link className="Link" to="/animals">Djuren</Link></li>
            </ul>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
        </>
    );
};