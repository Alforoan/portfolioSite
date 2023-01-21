import React from "react";
import { Link } from "react-scroll";

function ScrollTopButton() {
  return (
    <div>
      <button>
        <Link to="home" smooth={true}>
          Scroll to Top
        </Link>
      </button>
    </div>
  );
}

export default ScrollTopButton;
