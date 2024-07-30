import React from "react";
import "../styles/Left.css";

const Left = () => {
  return (
    <div className="left">
      <div className="inner sticky">
        <div className="abs">
          <div className="info">
            <h1 className="">zophia laud</h1>
            <h2>software engineer</h2>
            <p>
              Hi there! My name is Zophia. I am an aspiring software engineer,
              currently studying computer science. I enjoy learning different
              types of technology, from web development to machine learning. I
              like creating products that solve real problems and make a
              meaningful difference in people's lives.
            </p>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#tools">❀— my toolbox</a>
              </li>
              <li>
                <a href="#projects">❀— projects</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/zophia-laud/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="icon"
            >
              <img src="/linkedin.svg" alt="linkedin" className="filter-img" />
            </a>
            <a
              href="https://github.com/zlaud"
              rel="noopener noreferrer"
              target="_blank"
              title="Github"
              className="icon"
            >
              <img src="/github.svg" alt="Github" className="filter-img" />
            </a>
            <a
              href="https://drive.google.com/file/d/1WrjL_6F1e2nzCILHwOpR2MQX-axINtt_/view?usp=sharing"
              title="My Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src="/resume.svg" alt="resume" className="filter-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
