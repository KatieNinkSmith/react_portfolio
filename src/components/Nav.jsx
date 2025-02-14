import { useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

function Nav() {
  const formRef = useRef(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    setTimeout(scrollToForm, 1000); // Scroll after 1 second
  }, []);
  return (
    <div className="nav">
      {/* <img
        className="logo"
        src="./logo.png"
        alt="less then grater then and the letters K N S"
        width="7%"
      /> */}
      <div className="linkTo">
        <Link
          className="clickNav"
          to="https://www.linkedin.com/in/katie-nink-smith-560805325/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="clickNav"
          to="https://github.com/KatieNinkSmith"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
        <Link className="clickNav">
          <FaEnvelope onClick={scrollToForm} />
        </Link>
        <FaFilePdf className="clickNav" />
      </div>
    </div>
  );
}

export default Nav;
