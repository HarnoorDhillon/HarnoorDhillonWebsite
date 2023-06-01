import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#career">Contact</a></li>
                <li>
                  <a className="resume-link" href="https://www.dropbox.com/s/uj8ej2xlcuxl6ky/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                    Resume <i className="fas fa-download"></i>
                  </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;