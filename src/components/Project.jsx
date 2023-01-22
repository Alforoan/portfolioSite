import React from "react";
import styled from "styled-components";

function Project({ id, name, url, imgURL }) {
  return (
    <Wrapper>
      <a className="project-link" target="_blank" href={url}>
        {name}
      </a>
      <div>
        <img className="" src={imgURL} alt="picture" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;

  img {
    width: 450px;
    height: 300px;
    opacity: 0.5;
    margin-top: 0.7rem;
    border-radius: 10px;
  }

  .project-link {
    z-index: 1;
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    border-radius: 5px;
    border: 2px solid white;
    padding: 0.3rem 0.2rem;
  }
  .project-link:hover {
    transition: all 0.3s linear;
    border: 2px solid white;
    border-radius: 5px;
    background: #696969;
    color: white;
  }
  .project-link:visited {
    color: black;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

export default Project;
