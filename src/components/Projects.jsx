import React from "react";
import styled from "styled-components";
import projects from "./ProjectsData";
import Project from "./Project";

function Projects() {
  return (
    <Wrapper id="projects">
      <h1 className="my-projects">MY PROJECTS</h1>
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
  .my-projects {
    font-size: 2rem;
    padding-top: 1rem;
    margin-bottom: 3rem;
  }
  .project-container {
    display: flex;
  }
`;

export default Projects;
