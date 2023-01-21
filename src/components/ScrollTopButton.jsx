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
        <Link
          onScroll={event}
          type="button"
          className="scroll-top-button-link"
          to="navbar"
          smooth={true}
          duration={500}
        >
          <i class="fa-sharp fa-solid fa-angle-up"></i>
        </Link>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .scroll-top-button-link {
    font-size: 2rem;
    position: fixed;
    bottom: 10%;
    right: 20%;
    border: transparent;
    width: 3rem;
    height: 3rem;
    background: lightgray;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }
  .scroll-top-button-link:hover {
    transition: all 0.3s linear;
    border: 2px solid blue;
    background: transparent;
  }
`;

export default ScrollTopButton;
