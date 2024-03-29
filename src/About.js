import React from 'react';
import { Element } from 'react-scroll';
import TypingText from './TypingText';
import './About.css';
import backgroundImage from './images/polar.jpeg';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <Element name="about" className="element about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-box">
        <h1>I'm Harnoor Dhillon.</h1>
        <TypingText />
        <p>I'm a student at <strong>UC Berkeley</strong> studying <strong>Computer Science</strong>. My academic focus has allowed me 
          to build a solid foundation in coding principles, and I'm always excited about opportunities to apply these skills in new ways.</p>
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/harnoor-dhillon-447aa818a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/HarnoorDhillon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.dropbox.com/scl/fi/bxyym3gkb4hxatjy81b66/Resume.pdf?rlkey=uuvmy7tf6iob0lhoblgl12e4x&dl=0" target="_blank" rel="noopener noreferrer">
              <FaFileAlt size={30} />
            </a>
          </div>
      </div>
      <Link to="aboutme" spy={true} smooth={true} duration={500}>
        <IoIosArrowDown className="scroll-down-icon" size={30} />
      </Link>
    </Element>
    
  );
};

export default About;