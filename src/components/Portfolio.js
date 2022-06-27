import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";

const Portfolio = () => {

    return (
        <div data-bs-spy="scroll" data-bs-target="#navPort" tabindex="0">
            <Navigation />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Portfolio;