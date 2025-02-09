import React from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

function Projects() {
  const projects = {
    name: "Toddler Words",
    description: "Toddler language learning application",
    image: "./welcomePageNoUser.png",
    deployedURLFront: "https://toddlerwords.netlify.app/",
    deployedURLBack: "https://toddler-words-backend.onrender.com/",
    githubFront: "https://github.com/KatieNinkSmith/Toddler_Words_Frontend",
    githunBack: "https://github.com/KatieNinkSmith/Toddler_Words_Backend",
    toolsUsed:
      "Frontend: React.js Backend: Node.js, Express.js Database: MongoDB, Firebase Audio API: Dictionary API Authentication: JWT, bcrypt",
  };
  const prevProject = () => {
    const prevIndex = (curProIndex - 1 + projects.length) % projects.length;
    onWordChange(prevIndex);
  };
  const nextProject = () => {
    const nextIndex = (curProIndex + 1) % projects.length;
    onWordChange(nextIndex);
  };
  return (
    <div className="projects">
      <div className="carousel">
        <button onClick={prevProject}>
          <HiOutlineArrowSmLeft />
        </button>
        <div>
          <h3>{projects.name}</h3>
          <p>{projects.description}</p>
        </div>
        <button onClick={nextProject}>
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
