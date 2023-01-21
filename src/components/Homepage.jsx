import React from "react";
import styled from "styled-components";
import Background from "../images/background.png";

function Homepage() {
  return (
    <Wrapper id="home">
      <main>
        <h2>Welcome to my page</h2>
        <div>
          <img
            className="background-image"
            src={Background}
            alt="background image"
          />
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .background-image {
    opacity: 0.5;
  }
`;

export default Homepage;
