import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function ScrollTopButton() {
  const [invisible, setInvisible] = React.useState(false);

  return (
    <Wrapper>
      <button type="button" className="scroll-top-button">
        <Link to="navbar" smooth={true} duration={500}>
          Top
        </Link>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .scroll-top-button {
    font-size: 1.5rem;
    position: fixed;
    bottom: 10%;
    right: 20%;
    border: transparent;
    width: 3rem;
    height: 3rem;
    background: lightgray;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default ScrollTopButton;
