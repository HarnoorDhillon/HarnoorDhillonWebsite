import React from 'react';
import { Element } from 'react-scroll';
import TypingText from './TypingText';
import './About.css';
import backgroundImage from './images/stars.jpeg';

const About = () => {
  return (
    <Element name="about" className="element about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-box">
        <h1>I'm Harnoor Dhillon.</h1>
        <TypingText />
        <p>I'm a student at <strong>UC Berkeley</strong> studying <strong>Computer Science</strong>. My academic focus has allowed me 
          to build a solid foundation in coding principles, and I'm always excited about opportunities to apply these skills in new ways.</p>
      </div>
    </Element>
  );
};

export default About;