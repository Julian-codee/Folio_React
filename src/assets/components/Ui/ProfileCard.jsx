import React from 'react'
import '../../Styles/ProfileCard.css'

export const ProfileCard = () => {
  return (
    <>
    <section className="profile-container">
      <h1 className="profile-title">Hi there! I'm <span>John Doe</span></h1>
      <p className="profile-description">
        I'm a passionate frontend developer and UI/UX designer with over 5 years of experience creating 
        beautiful, functional, and user-centered digital experiences.
      </p>
      <p className="profile-description">
        My approach to design combines aesthetics with functionality, ensuring that the end product 
        not only looks great but also provides an intuitive user experience.
      </p>

      <div className="profile-info">
        <div className="info-box">
          <p className="label">Name</p>
          <p className="value">John Doe</p>
        </div>
        <div className="info-box">
          <p className="label">Email</p>
          <p className="value">john@example.com</p>
        </div>
        <div className="info-box">
          <p className="label">Location</p>
          <p className="value">New York, USA</p>
        </div>
        <div className="info-box">
          <p className="label">Availability</p>
          <p className="value">Freelance</p>
        </div>
      </div>

      <button className="download-btn">
        Download CV <span className="download-icon">⬇</span>
      </button>
    </section>
    </>
  );
};

