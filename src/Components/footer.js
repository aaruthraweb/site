import React from "react";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                Show Room - No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.
              </p>
              <div className="contact-item" style={{color:'white'}}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a  style={{color:'white'}}href="mailto:aaruthrakarthik@gmail.com">aaruthrakarthik@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span style={{color:'white'}} className="ph">9865343636, 9659597788</span>  
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <a style={{color:'white'}} href="https://maps.app.goo.gl/UE72bsNRyUhEiZHw9" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.116386312018!2d77.67993097234714!3d11.337928253405053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f8f02e5a4d7%3A0xd0af8a187d14613a!2sAaruthra%20Interior%20Decorators!5e1!3m2!1sen!2sin!4v1723178991951!5m2!1sen!2sin"></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-links">
              <h2>Follow Us</h2>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="quote">
              <p>&ldquo;Quality is our priority.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Aaruthra Interiors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
