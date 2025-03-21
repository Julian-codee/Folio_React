import React from "react";
import "../../../Styles/Myprojects.css";
import { Cards } from "../../Ui/Cards";
import { Footer } from "../Footer/Footer";

export const Myprojects = () => {
  // Lista de proyectos con datos dinámicos
  const projects = [
    {
      title: "FitFalcon",
      description: "A modern e-commerce platform with a sleek UI and seamless checkout experience.",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      demoLink: "https://fit-falcon.vercel.app",
      gitLink: "https://github.com/Julian-codee/FitFalcon.git",
    },
    {
      title: "Dictionary",
      description: "Personal portfolio showcasing my skills, projects, and experience.",
      tags: ["React", "CSS", "Framer Motion"],
      demoLink: "https://dictionary-xi-five.vercel.app",
      gitLink: "https://github.com/Julian-codee/Dictionary.git",
    },
    {
      title: "lazzy Letters",
      description: "A simple yet powerful task management application with drag and drop functionality.",
      tags: ["React", "Redux", "Firebase"],
      demoLink: "https://lazzy-letters.vercel.app",
      gitLink: "https://github.com/andressarchi/-lazy-letters.git",
    },
    {
      title: "Chat App",
      description: "Real-time chat application with authentication and media sharing.",
      tags: ["React", "Socket.io", "Node.js"],
      demoLink: "https://chatapp.com",
      gitLink: "https://github.com/user/chat-app",
    },
  ];

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

        <div className="ContainerCard">
          {projects.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoLink={project.demoLink}
              gitLink={project.gitLink}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
