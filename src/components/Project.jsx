import React from "react";
import styled from "styled-components";

function Project({ id, name, url, imgURL }) {
  return (
    <article>
      <h1>MY PROJECTS</h1>
      <h4>{name}</h4>
      <a target="_blank" href={url}>
        {name}
      </a>
      <div>
        <img src={imgURL} alt="picture" />
      </div>
    </article>
  );
}

export default Project;
