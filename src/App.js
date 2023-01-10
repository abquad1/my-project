
import React from "react";
import './index.css'
import Home from "./route/Home";
import Project from "./route/Project";
import About from "./route/About";
import Contact from "./route/Contact";
// import { Route } from "react-router";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/project"  element={<Project />}/>
        <Route path="/About"  element={<About />}/>
        <Route path="/Contact"  element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
