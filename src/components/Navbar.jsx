import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <main className="nav-center">
        <h1 className="alforoan">Alforoan</h1>

        <ul className="page-link-list">
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className="projects">
            <a href="/projects">Projects</a>
          </li>
        </ul>
        <button className="twitter-icon">
          <a
            target="_blank"
            rel="noopener nonreferrer"
            href="https://www.twitter.com"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </button>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  width: 100vw;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  .nav-center {
    max-width: 1100px;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    align-content: center;
  }
  .alforoan {
    font-size: 2rem;
    border: none;
    background: white;
  }
  .underline {
    border: 1px solid black;
  }
  .page-link-list {
    display: flex;
    list-style: none;
  }
  .page-link-list a {
    text-decoration: none;
    padding-right: 2rem;
  }

  .twitter-icon {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .projects {
    padding-right: 1rem;
  }

  .page-link-list a:hover {
    color: red;
    transition: all 0.3s linear;
  }
`;

export default Navbar;
