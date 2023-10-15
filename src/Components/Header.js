// src/components/Header.js
import './Header.css';
import TeamLogo from '../images/TeamLogo.png'; 

import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={ TeamLogo } alt="Logo" />
            </div>
            <nav className="nav-container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/tournament-ranking">Tournament Ranking</a></li>
                    <li><a href="/team-ranking">Team Ranking</a></li>
                    <li><a href="/global-ranking">Global Ranking</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
