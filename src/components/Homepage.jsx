import React from "react";
import styled from "styled-components";
import Background from "../images/background.png";

function Homepage() {
  return (
    <Wrapper id="home" className="homepage">
      <main>
        <h2 className="welcome">Welcome to my page</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          dolorum odit minima harum recusandae eveniet soluta consequuntur quo
          eligendi omnis!
        </p>
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
  .background-image {
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
  }
  .welcome {
    margin-top: 5rem;

    font-size: 3rem;
  }
  .description {
    max-width: 40vw;
    margin: auto;
    margin-bottom: 5rem;
  }
`;

export default Homepage;
