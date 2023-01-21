import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";

const info =
  " I am an aspiring software engineer with a passion for both technology and problem-solving. In my free time, I enjoy pushing myself both physically and mentally through rock climbing and testing my creativity through playing the guitar. I am constantly seeking new challenges and opportunities to grow as both an engineer and an individual.";

function Homepage() {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <Wrapper id="home" className="homepage">
      <main>
        <h2 className="welcome">WELCOME TO MY PAGE</h2>
        <p className="description">
          {readMore ? info : `${info.substring(0, 50)}...`}
          <button
            onClick={() => setReadMore((prev) => !prev)}
            className="read-more-btn"
          >
            {!readMore ? "Read More" : "Read Less"}
          </button>
        </p>
        <button type="button" className="projects-button">
          <Link to="projects" duration={700} smooth={true}>
            CHECK OUT MY PROJECTS
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

  .read-more-btn {
    border: transparent;
    background: white;
    border-radius: 3px;
    padding: 0.3rem 0.2rem 0.3rem 0.2rem;
    font-size: 0.8rem;
    margin-left: 0.3rem;
    color: #0047ab;
    font-weight: bold;
    cursor: pointer;
  }

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
    font-size: 1.2rem;
    font-weight: lighter;
    text-align: justify;

    align-items: center;
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
