import React from "react";

import projects from "./ProjectsData";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects">
      <div>
        {projects.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
