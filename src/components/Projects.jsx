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
      githubBack: "https://github.com/KatieNinkSmith/Toddler_Words_Backend",
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
      githubBack: "",
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
            <h1>Projects</h1>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
            <img src={currentProject.image} width="150" />
            {currentProject.deployedURLFront || currentProject.githubFront ? (
              <h4>
                Live link:{" "}
                <Link to={currentProject.deployedURLFront} target="_blank">
                  {currentProject.name} frontend
                </Link>{" "}
                GitHub:{" "}
                <Link to={currentProject.githubFront} target="_blank">
                  {currentProject.name} repo
                </Link>
              </h4>
            ) : null}
            {currentProject.deployedURLBack || currentProject.githubBack ? (
              <h4>
                Live link:{" "}
                <Link to={currentProject.deployedURLBack} target="_blank">
                  {currentProject.name} backend
                </Link>{" "}
                GitHub:{" "}
                <Link to={currentProject.githubBack} target="_blank">
                  {currentProject.name} repo
                </Link>
              </h4>
            ) : null}
            {currentProject.toolsUsed ? (
              <p>Tools used: {currentProject.toolsUsed}</p>
            ) : null}
          </div>
        ) : (
          <h1>Projects building...</h1>
        )}
        <button onClick={nextProject}>
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
