import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import { addImageProcess } from "../helpers";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLandingImages = async () => {
      setIsLoading(true);
      await addImageProcess("./images/bg11.png");
      await addImageProcess("./images/circle1.png");
      await addImageProcess("./images/home1.png");
      await addImageProcess("./images/projects/p0.png");
      await addImageProcess("./images/projects/p1.png");
      await addImageProcess("./images/projects/p2.png");
      await addImageProcess("./images/projects/p3.png");
      setIsLoading(false);
    };
    loadLandingImages();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <div>
          <Navigation />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      ) : (
        <div>
          <div
            className="loadingIcon"
            style={{
              marginTop: "35vh",
              marginBottom: "200px",
            }}
          >
            <img
              src="./images/icon.png"
              alt="circle"
              draggable="false"
              style={{
                zIndex: "1",
                width: "150px",
              }}
              data-aos="zoom-in"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
