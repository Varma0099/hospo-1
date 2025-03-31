import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      value: "krishnasrivarmachekuri@gmail.com",
      link: "mailto:krishnasrivarmachekuri@gmail.com"
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      value: "+91 9494343299",
      link: "tel:+919494343299"
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Location",
      value: "Hyderabad, Telangana, India"
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <div className="title-underline">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="9.001 8.125 301.983 63.8" viewBox="9.001 8.125 301.983 63.8" height="40" width="160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
            <g>
              <path d="M10.001 71.925a1 1 0 0 1-.479-1.878C59.982 42.618 106.85 24.744 152.803 15.4c54.695-11.121 107.676-9.485 157.473 4.86a1 1 0 0 1-.552 1.922C260.239 7.926 207.579 6.303 153.202 17.359c-45.756 9.303-92.441 27.112-142.725 54.445a.996.996 0 0 1-.476.121z" fill="#1d1d1b"></path>
            </g>
          </svg>
        </div>
        <p className="contact-subtitle">
          Have questions? We're here to help and provide you with the best healthcare solutions
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-wrapper">
                {info.icon}
              </div>
              <h3 className="contact-info-title">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="contact-info-value link">
                  {info.value}
                </a>
              ) : (
                <p className="contact-info-value">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <Send className="submit-icon" />
              </button>
            </form>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176476463!2d78.24323995495272!3d17.412281016110556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710425162600!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;