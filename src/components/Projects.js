import React from "react";

const Projects = () => {

    return (
        <div id="projects" className='container' style={{height: '100vh'}}>
                <h1 className="display-3 d-flex justify-content-center justify-content-sm-center mb-5"
                style={{color: '#C7D0D8'}}
                >Projects</h1>
            <div className="row d-flex h-50">
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-self-center">
                    <div className="card" style={{width: '30rem'}}>
                    <img src="./images/projects/p3.png" className="card-img-top" alt="Project 3"/>
                        <div className="card-body">
                            <h5 className="card-title">Project 3: Pokemon Quizzr</h5>
                            <p className="card-text"></p>
                            <a href="https://github.com/kendlc/Project3-Pokequizzr" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={30} alt="Github"/>
                            </a>
                            <a href="https://pokemon-quizzr.netlify.app/" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/globe.svg" 
                                width={30}alt="Live Site"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start align-self-center">
                    <div className="card" style={{width: '30rem'}}>
                        <img src="./images/projects/p2.png" className="card-img-top" alt="Project 2"/>
                        <div className="card-body">
                            <h5 className="card-title">Project 2: Expense Trackr</h5>
                            <p className="card-text"></p>
                            <a href="https://github.com/kendlc/Project-2-Expense-Trackr-Client" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={30} alt="Github"/>
                            </a>
                            <a href="https://expense-trackr0.netlify.app/" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/globe.svg" 
                                width={30}alt="Live Site"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex h-50">
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-self-center">
                    <div className="card" style={{width: '30rem'}}>
                        <img src="./images/projects/p1.png" className="card-img-top" alt="Project 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Project 1: Manga-Shoppu</h5>
                            <p className="card-text"></p>
                            <a href="https://github.com/kendlc/Project1-manga-shoppu" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={30} alt="Github"/>
                            </a>
                            <a href="https://manga-shoppu.herokuapp.com/" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/globe.svg" 
                                width={30}alt="Live Site"/>
                            </a>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start align-self-center">
                    <div className="card" style={{width: '30rem'}}>
                        <img src="./images/projects/p0.png" className="card-img-top" alt="Project 0"/>
                        <div className="card-body">
                            <h5 className="card-title">Project 0: TicTacToe</h5>
                            <p className="card-text"></p>
                            <a href="http://github.com/kendlc/Project0-Tictactoe" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={30} alt="Github"/>
                            </a>
                            <a href="https://kendlc.github.io/Project0-Tictactoe/" 
                            className="mx-4" target="_blank" rel="noreferrer">
                                <img src="./images/svg/globe.svg" 
                                width={30}alt="Live Site"/>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Projects;