import { useRef, useEffect } from "react";
import { Link } from "react-router";
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

function Nav() {
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
        <button className="downloadBtn">
          <a herf="katieResume.docx">
            <FaFilePdf className="clickNav" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Nav;
