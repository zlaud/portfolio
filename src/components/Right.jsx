import React from "react";
import "../styles/Right.css";
import Skill from "./Skill";
import Projects from "./Projects";

const Right = () => {
  return (
    <div className="right">
      <section className="tools" id="tools">
        <h1>my toolbox</h1>
        <Skill />
        <p></p>
      </section>
      <section className="projects" id="projects">
        <h1>Projects</h1>
        <Projects />
        <p></p>
      </section>
    </div>
  );
};

export default Right;
