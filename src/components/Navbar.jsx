import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <h1>Alforoan</h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
      <button>
        <i class="fa-brands fa-twitter"></i>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Navbar;
