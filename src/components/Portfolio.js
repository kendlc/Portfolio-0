import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";

const Portfolio = () => {
    const [delay, setDelay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        setTimeout( () => {
            setDelay(true);
        },500)
    
        setTimeout( () => {
            setIsLoading(false);
        }, 1800)
    },[]);

    return (
        <div>
            {!isLoading ? 
                <div>
                    <Navigation />
                    <Home />
                    <About />
                    { delay &&
                        <Projects />
                    }
                    <Contact />
                </div>
            : 
                <div>
                    <div className="loadingIcon"
                    style={{
                        marginTop: '35vh',
                        marginBottom: '200px',
                    }}>
                        <img src="./images/icon.png" alt="circle" draggable="false"
                        style={{
                            zIndex: '1', 
                            width: '150px',
                            }} data-aos="zoom-in"/>
                    </div>
                </div>
            }
        </div>
    );
}

export default Portfolio;