import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Personal Assistant",
      description: "Work closely with reception and administrative staff to ensure smooth service for patients and specialists. Prepare information materials and assist with patient care needs.",
      image: "https://dlabs.ai/wp-content/uploads/2021/08/image-1-1024x536.png",
      checkLink: "https://medi-bot-eiq8hkhojvf5mgtvcyvguy.streamlit.app/",
      buttonText: "Chat now"
    },
    {
      title: "Diabetes Detection",
      description: "Check for diabetes risk using our advanced machine learning model. Get instant predictions and learn more about diabetes management.",
      image: "https://julianhealthcare.com/wp-content/uploads/2019/07/Diabetes.jpg",
      checkLink: "https://diabetesdetectionmodel-9f5w3dyu8grflb7wkxsys9.streamlit.app/",
      readMoreLink: "https://en.wikipedia.org/wiki/Diabetes"
    },
    {
      title: "Parkinson's Disease Detection",
      description: "Early detection of Parkinson's disease symptoms using AI-powered analysis. Get professional insights and recommendations.",
      image: "https://i.pinimg.com/564x/83/6e/f7/836ef75120a32b411725c0ae5a5387eb.jpg",
      checkLink: "https://parkinsonmodel-brivosgmmbqokkfnqtgpxp.streamlit.app/",
      readMoreLink: "https://en.wikipedia.org/wiki/Parkinson%27s_disease"
    },
    {
      title: "Heart Disease Assessment",
      description: "Evaluate heart health risks using our predictive model. Get instant feedback and connect with specialists.",
      image: "https://www.rheumatologyadvisor.com/wp-content/uploads/sites/18/2019/02/heartg122375009_1529611-1720x1290.jpg",
      checkLink: "https://heartdisease-trdfpvrk2aukv2kzujhtns.streamlit.app/",
      readMoreLink: "https://en.wikipedia.org/wiki/Cardiovascular_disease"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <div className="services-underline">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="9.001 8.125 301.983 63.8" viewBox="9.001 8.125 301.983 63.8" height="40" width="160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
            <g>
              <path d="M10.001 71.925a1 1 0 0 1-.479-1.878C59.982 42.618 106.85 24.744 152.803 15.4c54.695-11.121 107.676-9.485 157.473 4.86a1 1 0 0 1-.552 1.922C260.239 7.926 207.579 6.303 153.202 17.359c-45.756 9.303-92.441 27.112-142.725 54.445a.996.996 0 0 1-.476.121z" fill="#1d1d1b"></path>
            </g>
          </svg>
        </div>
        <p className="services-subtitle">
          Comprehensive healthcare solutions tailored to your needs
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-links">
                <a href={service.checkLink} className="service-link check-link">
                  {service.buttonText || "Check now"}
                  <ArrowRight className="link-icon" />
                </a>
                {service.readMoreLink && (
                  <a href={service.readMoreLink} className="service-link read-more-link">
                    Read more
                    <ArrowRight className="link-icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;