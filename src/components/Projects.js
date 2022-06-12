import React from "react";

const Projects = () => {

    return (
        <div id="projects" className='container' style={{minHeight: '100vh'}}>
            <div className="row">
                <div className="col-sm-7" style={{marginTop: '10vh'}}>
                    <h1 className="display-4 d-flex justify-content-center justify-content-sm-center mb-5"
                    style={{color: '#C7D0D8'}}
                    >Featured Projects</h1>
                </div>
            </div>

            <div className="row d-flex d-flex justify-content-center">
                <div className="col-sm-6"
                style={{zIndex: '-999'}}>
                    <img src="./images/projects/p0.png" alt="project 0"
                    className="img-fluid"
                    style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                    />
                    
                </div>
                <div className="col-sm-4"
                style={{color: '#47177F', textAlign: 'left'}}>
                {/* <img src="./images/projects/p1.png" alt="project 0"
                    className="img-fluid"
                    style={{marginLeft: '-10rem'}}
                    /> */}
                <h4>: 4</h4>
                <a href="https://manga-shoppu.herokuapp.com/" 
                className="mx-2 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                    <h2>Pokemon Quizzr</h2>
                </a>
                <div>
                    <p
                    style={{background: '#716FD8',padding: '1rem', borderRadius: '5px', width: '110%', marginLeft: '-4rem',color: 'white'}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe officiis quisquam, reiciendis quasi explicabo quam quos non odio laboriosam mollitia at quibusdam, deleniti ipsum? Quae rerum dolore assumenda nobis iusto?
                    </p>
                    <p>
                        ReactJS | Firebase | PokemonAPI | Bootstrap | CSS 
                    </p>
                    <p>
                        <a href="https://github.com/kendlc/Project1-manga-shoppu" 
                        className="mx-2" target="_blank" rel="noreferrer">
                            <img src="./images/svg/github.svg" 
                            width={25} alt="Github"/>
                        </a>
                        <a href="https://manga-shoppu.herokuapp.com/" 
                        className="mx-2" target="_blank" rel="noreferrer">
                            <img src="./images/svg/demo.svg" 
                            width={25}alt="Live Site"/>
                        </a>
                    </p>
                </div>
                </div>
            </div>

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