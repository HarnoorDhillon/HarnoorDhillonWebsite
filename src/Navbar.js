import React from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom'; 
import './Navbar.css';

const NavBar = () => {
    const location = useLocation(); 
    // Determine if the navbar should be hidden on the current route
    const shouldHideNavbar = location.pathname === '/project1'; 

    // Conditionally apply styles or render different content based on the route
    if (shouldHideNavbar) {
        return null; // 
    }
    return (
        <nav>
            <ul>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                <li>
                  <a className="resume-link" href="https://www.dropbox.com/scl/fi/bxyym3gkb4hxatjy81b66/Resume.pdf?rlkey=uuvmy7tf6iob0lhoblgl12e4x&dl=0" target="_blank" rel="noopener noreferrer">
                    Resume <i class="fa-solid fa-arrow-down-to-line"></i>
                  </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;