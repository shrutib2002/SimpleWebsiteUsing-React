import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='image'>
      <div className='contact'>
        <div className='content1'>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Please reach out to us with any questions, comments, or suggestions.
          </p>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' placeholder='Your Name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' placeholder='Your Email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' placeholder='Your Message' required></textarea>
            </div>
            <button type='submit' className='custom-button'>Send Message</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

