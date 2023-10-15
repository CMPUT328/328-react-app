// src/components/Header.js
import './Header.css';

import TeamLogo from '../images/TeamLogo.png'; 

import { NavLink } from "react-router-dom";

import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={ TeamLogo } alt="Logo" />
            </div>
            <nav className="nav-container">
                <ul>
                    <li><NavLink to="/" activeClassName="activeLink">Home</NavLink></li>
                    <li><NavLink to="/tournament-ranking" activeClassName="activeLink">Tournament Ranking</NavLink></li>
                    <li><NavLink to="/team-ranking" activeClassName="activeLink">Team Ranking</NavLink></li>
                    <li><NavLink to="/global-ranking" activeClassName="activeLink">Global Ranking</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
