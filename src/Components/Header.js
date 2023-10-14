import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
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

      <Outlet />
    </>
  );
};

export default Header;
