import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="headerLink">
            <Link className="Link" to="/">
              Hem
            </Link>
          </li>
          <li className="headerLink">
            <Link className="Link" to="/animals">
              Djuren
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
