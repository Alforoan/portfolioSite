import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";

function Homepage() {
  return (
    <Wrapper id="home" className="homepage">
      <main>
        <h2 className="welcome">WELCOME TO MY PAGE</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolorum odit minima harum recusandae eveniet soluta consequuntur quo
          eligendi omnis!
        </p>
        <button className="projects-button">
          <Link to="projects" duration={700} smooth={true}>
            CHECK OUT PROJECTS
          </Link>
        </button>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  color: white;
  text-align: center;
  align-items: center;
  .background-image {
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
  }
  .welcome {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  .description {
    max-width: 40vw;
    margin: auto;
    margin-bottom: 2rem;
  }
  .projects-button {
    font-size: 2rem;
    padding: 1rem 0.5rem 1rem 0.5rem;
    color: darkgreen;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 10px;
  }
  .projects-button:hover {
    transition: all 0.3s linear;
    background-color: transparent;
    color: white;
  }
`;

export default Homepage;
