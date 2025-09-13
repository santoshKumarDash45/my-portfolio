import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container contact-section" id="contactsection">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-12 mb-4">
            <div className="contact-image">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </Fade>

        {/* Right Side Contact Info */}
        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="contact-info-card shadow rounded p-4">
              <div className="text-center mb-4">
                <h5>Contact Me</h5>
                <span className="line"></span>
              </div>

              <div className="contact-details">
                <div className="contact-item d-flex align-items-center mb-3">
                  <FaEnvelope size={22} className="contact-icon me-3" />
                  <a href="mailto:santoshkumardash909@gmail.com">
                    santoshkumardash909@gmail.com
                  </a>
                </div>

                <div className="contact-item d-flex align-items-center mb-3">
                  <FaPhoneAlt size={22} className="contact-icon me-3" />
                  <a href="tel:+917008343193">+91-7008343193</a>
                </div>

                <div className="contact-item d-flex align-items-center">
                  <FaLinkedin size={22} className="contact-icon me-3" />
                  <a
                    href="https://www.linkedin.com/in/santosh-kumar-dash-2a5491156/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/santosh-kumar-dash-2a5491156
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
