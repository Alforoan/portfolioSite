import React from "react";
import background from "../images/background.png";
import styled from "styled-components";
import htmlandcss from "../images/htmlandcss.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import python from "../images/python.png";

function About() {
  return (
    <Wrapper id="about">
      <h2>
        ABOUT <span className="me">ME</span>
      </h2>
      <div>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="js" />
        <img src={react} alt="react" />
        <img src={python} alt="python" />
        <h3>Hobbies</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  .me {
    color: green;
  }
`;

export default About;
