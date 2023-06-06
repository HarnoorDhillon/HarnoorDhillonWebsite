import React from 'react';
import './AboutMe.css'; 
import myFace from './images/myface.jpeg'; // Update with the correct path to your image
import { Element } from 'react-scroll';

const AboutMe = () => { 
  return (
    <Element name="aboutme" className="element aboutme">
      <section className="about-me">
        <div className="about-content">
          <img src={myFace} alt="My face" className="face-pic" />
          <div>
            <h2>About Me</h2>
            <p>Insert Text</p>
          </div>
          <div className="about-details">
            <div>
              <h3>Location</h3>
              <p>Berkeley, CA</p>
              <h3>University</h3>
              <p>UC Berkeley</p>
            </div>
            <div>
              <h3>Interests</h3>
              <p>Skiing, Hiking, Watching Sports</p>
              <h3>Employment</h3>
              <p>SWE at Meta</p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default AboutMe;