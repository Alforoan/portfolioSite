import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function ScrollTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.removeEventListener("scroll", event);
    window.addEventListener("scroll", event, { passive: true });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const event = () => {
    if (window.scrollY === 0) {
      setVisible(false);
    } else if (window.scrollY > 200) {
      setVisible(true);
    }
  };

  return (
    <Wrapper>
      {visible ? (
        <button onScroll={event} type="button" className="scroll-top-button">
          <Link to="navbar" smooth={true} duration={500}>
            <i class="fa-sharp fa-solid fa-angle-up"></i>
          </Link>
        </button>
      ) : (
        ""
      )}
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
