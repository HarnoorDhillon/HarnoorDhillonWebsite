import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#career">Contact</a></li>
                <li><a href="#contact">Resume</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;