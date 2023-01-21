import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Wrapper id="navbar">
      <main className="nav-center">
        <h1 className="alforoan">Alforoan</h1>

        <ul className="page-link-list">
          <li className="home">
            <Link to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true}>
              About
            </Link>
          </li>
          <li className="projects">
            <Link to="projects" smooth={true}>
              Projects
            </Link>
          </li>
        </ul>
        <button type="button" className="twitter-icon">
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
    cursor: pointer;
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
    color: blue;
  }
  .twitter-icon a:visited {
    color: #1da1f2;
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
