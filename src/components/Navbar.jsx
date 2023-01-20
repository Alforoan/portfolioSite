import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <h1>Alforoan</h1>
      <ul className="page-link-list">
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
      <button className="twitter-icon">
        <i class="fa-brands fa-twitter"></i>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  max-width: 1100px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  align-content: center;
  .page-link-list {
    display: flex;
    list-style: none;
  }
  .page-link-list a {
    text-decoration: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .twitter-icon {
    background: none;
    border: none;
    font-size: 2rem;
  }
`;

export default Navbar;
