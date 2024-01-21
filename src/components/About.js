import React from "react";

const About = () => {
  return (
    <div id="about" style={{ minHeight: "100vh" }}>
      <div className="row d-flex h-100 wrap">
        <div className="row">
          <div
            className="col-sm-5 d-flex justify-content-center justify-content-sm-end align-self-center aboutSec"
            style={{ marginTop: "20vh" }}
          >
            <img
              src="./images/profilephoto.jpeg"
              alt="Ken"
              draggable="false"
              className="img-fluid img-thumbnail"
              style={{ borderRadius: "10rem", width: "20rem" }}
              data-aos="zoom-in-right"
            />
          </div>

          <div className="col-sm-5 align-self-center mt-5 mt-sm-0 mb-sm-3 aboutSec">
            <div
              className="container"
              style={{ marginTop: "9vh" }}
              data-aos="zoom-in-left"
            >
              <h1
                className="display-5 d-flex justify-content-center justify-content-sm-start"
                style={{ color: "#C7D0D8" }}
              >
                About
              </h1>
              <h1
                className="d-flex justify-content-center justify-content-sm-start"
                style={{ color: "#47177F" }}
              >
                Hi! My name is Ken.
              </h1>
              <h6
                className="d-flex justify-content-center justify-content-sm-start text-center text-sm-start lh-base"
                style={{ color: "#47177F" }}
              >
                As a seasoned professional with a background in electrical
                engineering and project management, my journey into the realm of
                Software Engineering has been both enriching and dynamic. Over
                the years, my experience in electrical system design and
                implementation has honed my problem-solving skills and allowed
                me to wear various hats on diverse projects. This exposure
                inspired my pursuit of project management, where I delved into
                the intricacies of overseeing multifaceted endeavors.
              </h6>
              <h6
                className="d-flex justify-content-center justify-content-sm-start text-center text-sm-start lh-base"
                style={{ color: "#47177F" }}
              >
                In my role as a Software Engineer, I've found my passion in Full
                Stack Development. My enthusiasm extends to working with
                databases, APIs, and crafting user interfaces across different
                platforms. I am committed to gaining a comprehensive
                understanding of the projects I undertake, leveraging each
                opportunity to delve into new technologies and expand my
                industry knowledge.
              </h6>
            </div>
            <img
              src="./images/circle2.png"
              alt="circle2"
              draggable="false"
              className="circle2 d-none d-sm-block"
            />
          </div>

          <div className="row skillIcons mt-3 mt-sm-0" data-aos="fade-up">
            <div className="col-sm-5 d-flex justify-content-center justify-content-sm-end align-self-center container">
              <h1
                className="display-5 d-flex justify-content-center justify-content-sm-start"
                style={{ color: "#C7D0D8" }}
              >
                Tech Stack
              </h1>
            </div>
            <div className="col-sm-7 container p-0 p-sm-auto">
              <div
                className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start align-items-end"
                style={{ minHeight: 56, height: "6vh" }}
              >
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Javascript
                  </span>
                  <img
                    src="./images/skills/javascript.svg"
                    alt="javascript"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Typescript
                  </span>
                  <img
                    src="./images/skills/typescript.svg"
                    alt="typescript"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Ruby
                  </span>
                  <img
                    src="./images/skills/ruby.svg"
                    alt="ruby"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    HTML
                  </span>
                  <img
                    src="./images/skills/html5.svg"
                    alt="html5"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    CSS
                  </span>
                  <img
                    src="./images/skills/css3.svg"
                    alt="css3"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                {/* <span className="techStackIcons">
                                    <span className="techStackName" style={{fontSize: 10}}>Jquery</span> 
                                    <img src="./images/skills/jquery.svg" alt="jquery" className="img-fluid" draggable="false"/>
                                </span> */}
              </div>
              <div
                className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start"
                style={{ minHeight: 56, height: "6vh" }}
              >
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    React
                  </span>
                  <img
                    src="./images/skills/react.svg"
                    alt="react"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Next
                  </span>
                  <img
                    src="./images/skills/nextJs.svg"
                    alt="next"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Vue
                  </span>
                  <img
                    src="./images/skills/vue.svg"
                    alt="vue"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Rails
                  </span>
                  <img
                    src="./images/skills/rails.svg"
                    alt="rails"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Bootstrap
                  </span>
                  <img
                    src="./images/skills/bootstrap.svg"
                    alt="bootstrap"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Tailwind
                  </span>
                  <img
                    src="./images/skills/tailwindCss.svg"
                    alt="Tailwind"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Material UI
                  </span>
                  <img
                    src="./images/skills/mui.svg"
                    alt="Material UI"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                {/* <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Semantic
                  </span>
                  <img
                    src="./images/skills/semantic.svg"
                    alt="semantic"
                    className="img-fluid"
                    draggable="false"
                  />
                </span> */}
              </div>
              <div
                className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start"
                style={{ minHeight: 60, height: "6vh" }}
              >
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    NodeJS
                  </span>
                  <img
                    src="./images/skills/node.svg"
                    alt="node"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    ExpressJS
                  </span>
                  <img
                    src="./images/skills/express.svg"
                    alt="express"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    MongoDB
                  </span>
                  <img
                    src="./images/skills/mongodb.svg"
                    alt="mongodb"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    PostgreSQL
                  </span>
                  <img
                    src="./images/skills/postgresql.svg"
                    alt="postgresql"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Parse Platform
                  </span>
                  <img
                    src="./images/skills/parsePlatform.svg"
                    alt="parse platform"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Firebase
                  </span>
                  <img
                    src="./images/skills/firebase.svg"
                    alt="firebase"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
              </div>
              <div
                className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start"
                style={{ minHeight: 56, height: "6vh" }}
              >
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Git
                  </span>
                  <img
                    src="./images/skills/git.svg"
                    alt="git"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Netlify
                  </span>
                  <img
                    src="./images/skills/netlify.svg"
                    alt="netlify"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Heroku
                  </span>
                  <img
                    src="./images/skills/heroku.svg"
                    alt="heroku"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
                <span className="techStackIcons">
                  <span className="techStackName" style={{ fontSize: 10 }}>
                    Postman
                  </span>
                  <img
                    src="./images/skills/postman.svg"
                    alt="postman"
                    className="img-fluid"
                    draggable="false"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
