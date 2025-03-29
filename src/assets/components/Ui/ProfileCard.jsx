import React from 'react'
import '../../Styles/ProfileCard.css'

export const ProfileCard = () => {
  return (
    <>

      <div className="info-container">

        <h3>Hi there! I'm Jul!an</h3>

        <p>
          I'm a passionate frontend developer and UI/UX designer with over 5 years of
          experience creating beautiful, functional, and user-centered digital experiences.
        </p>

        <p>
          My approach to design combines aesthetics with functionality, ensuring that the end
          product not only looks great but also provides an intuitive user experience.
        </p>

        <div className="personal-info">
          <div className="info-item">
            <span className="label">Name: </span>
            <span className="value">Julian Cortes</span>
          </div>

          <div className="info-item">
            <span className="label">Email: </span>
            <span className="value">mmm808383@gmail.com</span>
          </div>

          <div className="info-item">
            <span className="label">Location: </span>
            <span className="value">Quindio, Colombia</span>
          </div>

          <div className="info-item">
            <span className="label">Availability: </span>
            <span className="value">Freelance</span>
          </div>
        </div>

        <a href="https://drive.google.com/file/d/1wdWJ3FfXKPm7e3gRXq6kyFNv6GOW23-d/view" target="_blank">
          <button className='download-button '>View CV</button>
        </a>



      </div>


    </>
  );
};

