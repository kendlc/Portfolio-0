import React from "react";

const Home = () => {
  const bg = {
    height: `100vh`,
    background: 'url("./images/bg11.webp") no-repeat 50% 99%',
    backgroundSize: "cover",
  };

  return (
    <div id="home" className=" home" style={bg} data-aos="fade-in">
      <div className="row d-flex h-100">
        <div className="col-sm-7 align-self-center mt-5 mt-sm-0 mb-sm-5 wrap">
          <div className="circle">
            <img
              src="./images/circle1.png"
              alt="circle"
              draggable="false"
              style={{ zIndex: "1" }}
              data-aos="zoom-in"
            />
          </div>
          <h1
            className="display-1 d-flex justify-content-center justify-content-sm-end ken"
            data-aos="fade-up"
            style={{ color: "whitesmoke", zIndex: "4" }}
          >
            KEN DELA CRUZ
          </h1>
          <h1
            className="d-flex justify-content-center justify-content-sm-end titleHeading"
            data-aos="fade-up"
            style={{ color: "#C7D0D8" }}
          >
            SOFTWARE ENGINEER
          </h1>
        </div>
        <div className="col-sm-5 d-flex justify-content-start align-self-center mb-5">
          <img
            src="./images/home1.png"
            alt="icon"
            draggable="false"
            className="img-fluid"
            style={{ zIndex: "4" }}
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
