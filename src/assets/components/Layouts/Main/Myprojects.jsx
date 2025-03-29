import React from "react";
import "../../../Styles/Myprojects.css";
import { Cards } from "../../Ui/Cards";
import { Footer } from "../Footer/Footer";
import FitFalcon from '../../../../img/FitFalcon.png'
import Diccionary from '../../../../img/LexiFy.png'
import LazyyLetters from '../../../../img/LazzyLetter.png'
import MusicReproductor from '../../../../img/MusicReproductor.png'

export const Myprojects = () => {
  // Lista de proyectos con datos dinámicos
  const projects = [
    {
      title: "FitFalcon",
      description: "Discover the latest in athletic fashion with our app. Shop high-performance gear, track trends, and find the perfect fit for your workouts.",
      tags: ["Js", "Css5", "Boostrap"],
      demoLink: "https://fit-falcon.vercel.app",
      gitLink: "https://github.com/Julian-codee/FitFalcon.git",
      image: FitFalcon,
    },
    {
      title: "Dictionary",
      description: "Instantly translate text, voice, and images in multiple languages. Communicate effortlessly and break language barriers anywhere.",
      tags: ["Js", "Css5", "Boostrap"],
      demoLink: "https://dictionary-xi-five.vercel.app",
      gitLink: "https://github.com/Julian-codee/Dictionary.git",
      image: Diccionary,
    },
    {
      title: "lazzy Letters",
      description: "Challenge your vocabulary with fun puzzles and brain teasers. Compete with friends and sharpen your word skills daily.",
      tags: ["Js", "Css5", "Boostrap"],
      demoLink: "https://lazzy-letters.vercel.app",
      gitLink: "https://github.com/andressarchi/-lazy-letters.git",
      image: LazyyLetters,
    },
    {
      title: "Music Reproductor",
      description: "Enjoy your favorite songs with a sleek, easy-to-use player. Create playlists, explore genres, and listen offline anytime.",
      tags: ["Js", "Css5", "Boostrap"],
      demoLink: "https://music-reproductor-five.vercel.app",
      gitLink: "https://github.com/Julian-codee",
      image: MusicReproductor,
    },
  ];

  return (
    <>
      <div className="main-project">
        <div className="ContainerProject">
          <h2 className="Project-title">My Projects</h2>
          <hr className="divider" />
          <p className="descripttion">
            Explore my recent work and projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="ContainerCard">
          {projects.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoLink={project.demoLink}
              gitLink={project.gitLink}
              image={project.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
