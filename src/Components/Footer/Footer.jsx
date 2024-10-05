import React from 'react';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-main'>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Helmet>

      
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      
      <div className='social-icons'>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  );
}


