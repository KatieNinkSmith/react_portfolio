import { Link } from "react-router";
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
          <h2>{projects.name}</h2>
          <p>{projects.description}</p>
          <img src={projects.image} width="150" />
          <h4>
            Live link:
            <Link to={projects.deployedURLFront} target="_blank">
              Toddler words frontend
            </Link>
          </h4>
          <h4>
            Live link:
            <Link to={projects.deployedURLBack} target="_blank">
              Toddler words backend
            </Link>
          </h4>
          <p>Tools used: {projects.toolsUsed}</p>
        </div>
        <button onClick={nextProject}>
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
