import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import TeamLogo from "../../images/TeamLogo.png";

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={TeamLogo} alt="Logo" />
                </Link>
            </div>
            <nav className="nav-container">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={activeLink === "/" ? "activeLink" : ""}
                            onClick={() => setActiveLink("/")}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tournament-ranking"
                            className={
                                activeLink === "/tournament-ranking"
                                    ? "activeLink"
                                    : ""
                            }
                            onClick={() => setActiveLink("/tournament-ranking")}
                        >
                            Tournament Ranking
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/team-ranking"
                            className={
                                activeLink === "/team-ranking"
                                    ? "activeLink"
                                    : ""
                            }
                            onClick={() => setActiveLink("/team-ranking")}
                        >
                            Team Ranking
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/global-ranking"
                            className={
                                activeLink === "/global-ranking"
                                    ? "activeLink"
                                    : ""
                            }
                            onClick={() => setActiveLink("/global-ranking")}
                        >
                            Global Ranking
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
