import React from 'react'
import '../../Styles/ProfileCard.css'

export const ProfileCard = () => {
  return (
    <>
    <div className="personal-info">
        <div className="info-item">
          <span className="label">Name</span>
          <span className="value">John Doe</span>
        </div>
        
        <div className="info-item">
          <span className="label">Email</span>
          <span className="value">john@example.com</span>
        </div>
        
        <div className="info-item">
          <span className="label">Location</span>
          <span className="value">New York, USA</span>
        </div>
        
        <div className="info-item">
          <span className="label">Availability</span>
          <span className="value">Freelance</span>
        </div>
      </div>

      <button className="download-button">
        Download CV
      </button>
    </>
  );
};

