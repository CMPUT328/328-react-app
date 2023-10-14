import { Outlet, Link } from "react-router-dom";
import "./Styles.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tournament-ranking">Tournament Ranking</Link>
            </li>
            <li>
              <Link to="/team-ranking">Team Ranking</Link>
            </li>
            <li>
              <Link to="/global-ranking">Global Ranking</Link>
            </li>
            <li>
              <Link to="/predict-ranking">Predict Ranking</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
