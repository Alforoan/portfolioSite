import React from "react";
import styled from "styled-components";

function Project({ id, name, url, imgURL }) {
  return (
    <Wrapper>
      <h4>{name}</h4>
      <a target="_blank" href={url}>
        {name}
      </a>
      <div>
        <img src={imgURL} alt="picture" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 450px;
    height: 300px;
    opacity: 0.5;
  }
`;

export default Project;
