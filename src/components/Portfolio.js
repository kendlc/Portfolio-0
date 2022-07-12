import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";

const Portfolio = () => {
    const [delay, setDelay] = useState(false);

    useEffect( () => {
        setTimeout( () => {
            setDelay(true);
        },500)
    },[]);

    return (
        <div>
            <Navigation />
            <Home />
            <About />
            { delay &&
                <Projects />
            }
            <Contact />
        </div>
    );
}

export default Portfolio;