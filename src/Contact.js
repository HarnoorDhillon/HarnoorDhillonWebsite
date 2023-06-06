import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import { IoMdSend } from 'react-icons/io';
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pa6x9wv', 'template_7kjy5rr', e.target, 'user_Ro_kc1RPa6Jq_VrCb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <Element name="contact" className="element contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <input type="text" name="name" placeholder="Name" className="form-control" />
            <input type="email" name="email" placeholder="Email" className="form-control" />
            <textarea name="message" placeholder="Message" className="form-control message" />
            <button className="form-btn" type="submit">
              Send Message <IoMdSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
