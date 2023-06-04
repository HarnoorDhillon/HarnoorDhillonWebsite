import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="contact" className="element contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        {/* Your form or contact info goes here */}
      </div>
    </Element>
  );
};

export default Contact;