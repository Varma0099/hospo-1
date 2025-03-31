import React from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Calendar className="feature-icon" />,
      title: "Smart Scheduling",
      description: "Our AI-powered scheduling system optimizes appointment slots, considering doctor availability and patient preferences to minimize wait times."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Real-time Availability",
      description: "View and book available slots instantly, with automatic conflict resolution to prevent double-bookings and ensure smooth operations."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Multi-doctor Support",
      description: "Manage schedules for multiple healthcare providers simultaneously, with specialized views for each practitioner's calendar."
    },
    {
      icon: <CheckCircle className="feature-icon" />,
      title: "Easy Management",
      description: "Simple interface for booking, rescheduling, and canceling appointments, with automated notifications and reminders."
    }
  ];

  const benefits = [
    {
      title: "For Clinics",
      points: [
        "Reduced administrative workload",
        "Optimized resource utilization",
        "Decreased no-show rates",
        "Better patient satisfaction"
      ]
    },
    {
      title: "For Patients",
      points: [
        "24/7 online booking",
        "Shorter wait times",
        "Flexible scheduling options",
        "Automated reminders"
      ]
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Smart Appointment Scheduler</h1>
        <div className="title-underline">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="9.001 8.125 301.983 63.8" viewBox="9.001 8.125 301.983 63.8" height="40" width="160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
            <g>
              <path d="M10.001 71.925a1 1 0 0 1-.479-1.878C59.982 42.618 106.85 24.744 152.803 15.4c54.695-11.121 107.676-9.485 157.473 4.86a1 1 0 0 1-.552 1.922C260.239 7.926 207.579 6.303 153.202 17.359c-45.756 9.303-92.441 27.112-142.725 54.445a.996.996 0 0 1-.476.121z" fill="#1d1d1b"></path>
            </g>
          </svg>
        </div>
        <p className="about-subtitle">
          Revolutionizing clinic appointment management with smart scheduling technology
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="benefits-section">
        <h2 className="benefits-title">Key Benefits</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <h3 className="benefit-title">{benefit.title}</h3>
              <ul className="benefit-list">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="benefit-point">
                    <ArrowRight className="point-icon" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-section">
        <h2 className="tech-title">Technical Excellence</h2>
        <div className="tech-details">
          <p>Built with modern technologies to ensure reliability and performance:</p>
          <ul className="tech-list">
            <li>Python-powered backend with Flask/Django framework</li>
            <li>Real-time conflict resolution system</li>
            <li>Secure database management</li>
            <li>Responsive web interface</li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to Transform Your Clinic?</h2>
        <p className="cta-description">
          Join the growing number of healthcare providers using our smart scheduling system.
        </p>
        <button className="cta-button">
          Get Started
          <ArrowRight className="cta-icon" />
        </button>
      </div>
    </div>
  );
};

export default About;