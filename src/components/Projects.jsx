import { Link } from "react-router";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { useState } from "react";

function Projects() {
  // add additional projects ASAP as the buttons do not work currently
  const [curProIndex, setCurProIndex] = useState(0);

  const projects = [
    {
      name: "Toddler Words",
      description: "Toddler language learning application",
      image: "./welcomePageNoUser.png",
      deployedURLFront: "https://toddlerwords.netlify.app/",
      deployedURLBack: "https://toddler-words-backend.onrender.com/",
      githubFront: "https://github.com/KatieNinkSmith/Toddler_Words_Frontend",
      githunBack: "https://github.com/KatieNinkSmith/Toddler_Words_Backend",
      toolsUsed:
        "Frontend: React.js Backend: Node.js, Express.js Database: MongoDB, Firebase Audio API: Dictionary API Authentication: JWT, bcrypt",
    },
    {
      name: "",
      description: "",
      image: "",
      deployedURLFront: "",
      deployedURLBack: "",
      githubFront: "",
      githunBack: "",
      toolsUsed: "",
    },
  ];

  const prevProject = () => {
    const prevIndex = (curProIndex - 1 + projects.length) % projects.length;
    onProChange(prevIndex);
  };
  const nextProject = () => {
    const nextIndex = (curProIndex + 1) % projects.length;
    onProChange(nextIndex);
  };

  const onProChange = (newIndex) => {
    setCurProIndex(newIndex);
  };

  const currentProject = projects[curProIndex];

  return (
    <div className="projects">
      <div className="carousel">
        <button onClick={prevProject}>
          <HiOutlineArrowSmLeft />
        </button>
        {currentProject.name ? (
          <div>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
            <img src={currentProject.image} width="150" />
            {currentProject.deployedURLFront ? (
              <h4>
                Live link:
                <Link to={currentProject.deployedURLFront} target="_blank">
                  {currentProject.name} frontend
                </Link>
              </h4>
            ) : null}
            {currentProject.deployedURLBack ? (
              <h4>
                Live link:
                <Link to={currentProject.deployedURLBack} target="_blank">
                  {currentProject.name} backend
                </Link>
              </h4>
            ) : null}
            {currentProject.toolsUsed ? (
              <p>Tools used: {currentProject.toolsUsed}</p>
            ) : null}
          </div>
        ) : null}
        <button onClick={nextProject}>
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
