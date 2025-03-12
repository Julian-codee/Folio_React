import React from "react";
import '../../../Styles/M-AboutMe.css'

const MainAboutMe = () => {
  return (
    <>
      <section className="main-about-me">
        <h2>About Me</h2>
        <hr className="divider" />
        <p>
          Get to know me better and learn about my journey in the world of
          design and development.
        </p>

        <div className="info-aboutMe">

            <div className="image-aboutme">
                
            </div>

          <div className="aboutMe">
            <h3>Who am I?</h3>
            <p>
              I am a front-end developer and designer with a passion for
              creating beautiful and functional websites. I have a background in
              graphic design and a degree in web development.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default MainAboutMe;
