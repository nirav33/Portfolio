import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Eduaction from "./components/Eduaction";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <Project></Project>
        <Eduaction></Eduaction>
        <Achievement></Achievement>
        <Contact></Contact>
      </div>
    </Router>
  );
}

export default App;
