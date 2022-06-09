import React from "react";

const About = () => {

    return (
        <div id="about" style={{minHeight: '100vh'}}>



        <div className="row d-flex h-100">
            <div className="row">
                <div className="col-sm-5 d-flex justify-content-center justify-content-sm-end align-self-center aboutSec" style={{marginTop: '20vh'}}>
                    <img src="./images/profilephoto.jpeg" alt="Ken" draggable="false" className="img-fluid img-thumbnail"
                    style={{borderRadius: '10rem', width: '20rem'}} />
                </div>

                <div className="col-sm-5 align-self-center mt-5 mt-sm-0 mb-sm-3 aboutSec">
                    <div className="container" style={{marginTop: '15vh'}}>
                    <h1 className="display-5 d-flex justify-content-center justify-content-sm-start"
                    style={{color: '#C7D0D8'}}
                    >About</h1>
                    <h1 className="d-flex justify-content-center justify-content-sm-start"
                    style={{color: '#47177F'}}
                    >Hi! My name is Ken.</h1>
                    <h6 className="d-flex justify-content-center justify-content-sm-start text-center text-sm-start lh-base"
                    style={{color: '#47177F'}}
                    >I’m a Software Engineer with a background in electrical engineering and project management. As an engineering professional with 2 years of experience in electrical system design and implementation, I was able to hone my skills in problem solving. It also gave me the opportunity to wear many different hats on various projects for which inspired me to study project management.</h6>
                    <h6 className="d-flex justify-content-center justify-content-sm-start text-center text-sm-start lh-base"
                    style={{color: '#47177F'}}
                    >As a career change Software Engineer, I am passionate in Full Stack Development. I like working in databases and building user-facing websites. I am driven to fully understand projects I work on thus I take the opportunity to learn more technologies and grow my knowledge on the industry. </h6>
                    </div>
                </div>

                <div className="row skillIcons"
                style={{marginTop: '1vh'}}>
                    <div className="col-sm-5 d-flex justify-content-center justify-content-sm-end align-self-center container">
                        <h1 className="display-5 d-flex justify-content-center justify-content-sm-start"
                        style={{color: '#C7D0D8'}}
                        >Tech Stack</h1>
                    </div>
                    <div className="col-sm-7 container">
                        <div className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start">
                            <span>
                                <img src="./images/skills/javascript.svg" alt="javascript" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/ruby.svg" alt="ruby" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/html5.svg" alt="html5" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/css3.svg" alt="css3" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/git.svg" alt="git" className="img-fluid" draggable="false"/>
                            </span>
                        </div>
                        <div className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start">
                            <span>
                                <img src="./images/skills/react.svg" alt="react" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/vue.svg" alt="vue" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/bootstrap.svg" alt="bootstrap" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/semantic.svg" alt="semantic" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/heroku.svg" alt="heroku" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/netlify.svg" alt="netlify" className="img-fluid" draggable="false"/>
                            </span>
                        </div>
                        <div className="row container mt-3 mb-3 d-flex justify-content-center justify-content-sm-start">
                            <span>
                                <img src="./images/skills/node.svg" alt="node" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/express.svg" alt="express" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/rails.svg" alt="rails" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/postgresql.svg" alt="postgresql" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/mongodb.svg" alt="mongodb" className="img-fluid" draggable="false"/>
                            </span>
                            <span>
                                <img src="./images/skills/firebase.svg" alt="firebase" className="img-fluid" draggable="false"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>



        </div>
    );
}

export default About;