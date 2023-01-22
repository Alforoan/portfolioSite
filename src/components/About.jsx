import React from "react";
import background from "../images/background.png";
import styled from "styled-components";
import htmlandcss from "../images/htmlandcss.png";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import python from "../images/python.png";

const htmlInfo =
  "Above are the programming languages I am quite familiar with. Learning python made it easier to learn Javascript and I learned the others to start building websites. You can scroll down to check out some of my work.";

function About() {
  const [info, setInfo] = React.useState(false);

  return (
    <Wrapper id="about">
      <h2 className="about">
        ABOUT <span className="me">ME</span>
      </h2>
      <main>
        <div className="html-css-container">
          <div
            className="icon-container"
            onMouseEnter={() => setInfo((prev) => !prev)}
            onMouseLeave={() => setInfo(false)}
          >
            <img className="img html-and-css" src={html} alt="html" />
            <img className="img html-and-css" src={css} alt="html" />
            <img className="img javascript" src={javascript} alt="js" />
            <img className="img react" src={react} alt="react" />
            <img className="img python" src={python} alt="python" />
          </div>

          <div>
            <p className="html-info">{htmlInfo}</p>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  .about {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .me {
    color: green;
  }
  .icon-container {
    cursor: pointer;
    margin-bottom: 3rem;
  }
  .img {
    height: 200px;
    width: 250px;
  }

  .javascript {
    width: 230px;
    padding: 0;
    margin: 0;
  }

  .html-info {
    max-width: 800px;
    font-size: 1.3rem;
    text-align: justify;
    margin: auto;
  }
  .html-css-container {
    diplay: flex;

    flex-direction: column;
    align-items: center;
  }
`;

export default About;
