import React from "react";
import '../../../Styles/M-AboutMe.css';
import {ProfileCard} from '../../Ui/ProfileCard'
import profileImage from "../../../../img/ME3.png";

export const MainAboutMe = () => {
  return (
    <section className="main-about-me">
      <div className="aboutMe">
        <div className="about-header">
          <h2>About Me</h2>
          <hr className="divider" />
          <p>
            Get to know me better and learn about my journey in the world of
            design and development.
          </p>
        </div>

        </div>

        <div className="about-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>

          <ProfileCard />
        </div>
      
    </section>
  );
};
