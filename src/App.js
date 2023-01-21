import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  const [visible, setVisible] = React.useState(false);

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
