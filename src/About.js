import React from 'react';
import { Element } from 'react-scroll';
import './About.css';
import backgroundImage from './images/stars.jpeg';

const About = () => {
  return (
    <Element name="about" className="element about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-box">
        <h1>I'M HARNOOR DHILLON</h1>
        <p>Your paragraph here.</p>
      </div>
    </Element>
  );
};

export default About;