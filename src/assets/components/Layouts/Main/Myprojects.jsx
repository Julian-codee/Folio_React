import React from 'react'
import '../../../Styles/Myprojects.css'
import { Cards } from '../../Ui/Cards'

export const Myprojects = () => {
  return (

    <>
    <div className="main-project">
        <div className="ContainerProject">
        <h2 className="Project-title">My Projects</h2>
        <hr className="divider" />
        <p className="description">
        Explore my recent work and projects that showcase my skills and expertise.
        </p>
      </div>

      <Cards />

      </div>

    </>
  )
}


