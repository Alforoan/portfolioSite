import React from "react";
import styled from "styled-components";
import projects from "./ProjectsData";
import Project from "./Project";

function Projects() {
  return (
    <Wrapper id="projects">
      <h1 className="my-projects">
        MY <span className="span">PROJECTS</span>{" "}
      </h1>
      <div className="project-container">
        {projects.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  background: lightgray;

  margin-top: 3rem;

  height: 100vh;
  .my-projects {
    font-size: 2rem;
    padding-top: 1rem;
    margin-bottom: 3rem;
  }
  .project-container {
    max-width: 1100px;
    display: flex;
    margin: auto;
  }
  .span {
    color: green;
  }
`;

export default Projects;
