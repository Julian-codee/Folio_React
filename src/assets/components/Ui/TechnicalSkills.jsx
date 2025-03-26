import React from 'react';
import '../../Styles/TechnicalSkiss.css';


export const TechnicalSkills = () => {
  return (

    <>
    <div className="progressSkill">
      <h3>Technical Skilss</h3>
      <div className="infoProgress">
      <h4>HTML & CSS</h4>
      <span className="progressLabel">95%</span>
      </div>
      <progress value={95} max={100}></progress>

      <div className="infoProgress">
      <h4>JavaScript</h4>
      <span className="progressLabel">90%</span>
      </div>
      <progress value={90} max={100}></progress>

      <div className="infoProgress">
      <h4>React</h4>
      <span className="progressLabel">85%</span>
      </div>
      <progress value={85} max={100}></progress>

      <div className="infoProgress">
      <h4>UI / UX Desing</h4>
      <span className="progressLabel">90%</span>
      </div>
      <progress value={90} max={100}></progress>

      <div className="infoProgress">
      <h4>Node JS</h4>
      <span className="progressLabel">70%</span>
      </div>
      <progress value={70} max={100}></progress>

      <div className="infoProgress">
      <h4>Java</h4>
      <span className="progressLabel">65%</span>
      </div>
      <progress value={65} max={100}></progress>

      <div className="infoProgress">
      <h4>MySql</h4>
      <span className="progressLabel">75%</span>
      </div>
      <progress value={75} max={100}></progress>
   
    </div>

    


    </>

  );
};
