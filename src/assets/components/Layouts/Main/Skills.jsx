import React from 'react'
import { TechnicalSkills } from '../../Ui/TechnicalSkills'
import { Footer } from '../Footer/Footer'
import { ToolsSoftware } from '../../Ui/ToolsSoftware'
import '../../../Styles/Skilss.css'

export const Skills = () => {

  return (
    <>
      <div className="main-Skills">
        <div className="ContainerSkilss">
          <h2 className="Project-title">My Projects</h2>
          <hr className="divider" />
          <p className="description">
            Explore my recent work and projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="Skilss">

        <TechnicalSkills />

        <ToolsSoftware />
       


        </div>

      </div>

      <Footer />





    </>
  );
};


