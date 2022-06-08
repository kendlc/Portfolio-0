import React from "react";

const About = () => {

    return (
        <div id="about" style={{minHeight: '100vh'}}>



        <div className="row d-flex h-100">

            <div className="col-sm-5 d-flex justify-content-center justify-content-sm-end align-self-center" style={{marginTop: '30vh'}}>
                <img src="./images/profilephoto.jpeg" alt="Ken" draggable="false" className="img-fluid img-thumbnail"
                style={{borderRadius: '10rem', width: '20rem'}} />
            </div>

            <div className="col-sm-5 align-self-center mt-5 mt-sm-0 mb-sm-5">
                <div className="container" style={{marginTop: '30vh'}}>
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

        </div>

        </div>
    );
}

export default About;