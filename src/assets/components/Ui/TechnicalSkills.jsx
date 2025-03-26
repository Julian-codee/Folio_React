import React from 'react';
import '../../Styles/TechnicalSkiss.css';


export const TechnicalSkills = () => {
  return (

    <>
    <div className="progressSkill">
      <div className="infoProgress">
      <h4>HTML</h4>
      <span className="progressLabel">95%</span>
      </div>
      <progress value={95} max={100}></progress>
   
    </div>


    </>

  );
};
