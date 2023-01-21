import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Homepage />
      <About />
      <Projects />
    </React.Fragment>
  );
}

export default App;
