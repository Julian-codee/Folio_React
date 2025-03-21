import React from "react";
import "../../Styles/Cards.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Cambia 'img' por 'image' para mantener consistencia con tu componente Myprojects
export const Cards = ({ title, description, tags, demoLink, gitLink, image }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          {/* Quita los atributos incorrectos y coloca la imagen correctamente */}
          <img src={image} alt={title} className="card-img" />
          <div className="image-dark">
            <a className="btn" href={demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Demo
            </a>
            <a className="btn" href={gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Git
            </a>
          </div>
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};