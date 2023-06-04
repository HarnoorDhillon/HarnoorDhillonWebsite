import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                <li>
                  <a className="resume-link" href="https://www.dropbox.com/s/uj8ej2xlcuxl6ky/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                    Resume <i class="fa-solid fa-arrow-down-to-line"></i>
                  </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;