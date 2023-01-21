import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Homepage />
      <ScrollTopButton />
      <About />
      <Projects />
    </React.Fragment>
  );
}

export default App;
