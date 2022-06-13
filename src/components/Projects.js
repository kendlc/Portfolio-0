import React, { useState } from "react";

const Projects = () => {
    const [showDemoP0, setShowDemoP0] = useState(false);
    const [showDemoP1, setShowDemoP1] = useState(false);
    const [showDemoP2, setShowDemoP2] = useState(false);
    const [showDemoP3, setShowDemoP3] = useState(false);
    const [showGifP0, setShowGifP0] = useState('./images/projects/srp0.gif');
    const [showGifP1, setShowGifP1] = useState('./images/projects/srp1.gif');
    const [showGifP2, setShowGifP2] = useState('./images/projects/srp1.gif');
    const [showGifP3, setShowGifP3] = useState('./images/projects/srp1.gif');


    return (
        <div id="projects" className='container' style={{minHeight: '100vh'}}>

            

            <div className="row">
                <div className="col-sm-7" style={{marginTop: '10vh'}}>
                    <h1 className="display-4 d-flex justify-content-center justify-content-sm-center mb-5"
                    style={{color: '#C7D0D8'}}
                    >Featured Projects</h1>
                </div>
            </div>

            <div className="row d-flex d-flex justify-content-center mt-4">
                <h2 className="d-inline d-sm-none"
                style={{color: '#47177F'}}>
                    : 3 Pokemon Quizzr
                </h2>
                <div className="col-sm-6 hoverImage  mb-sm-4"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP3('./images/projects/srp3.gif');
                    }, 0);
                    setShowDemoP3(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP3('...');
                    setShowDemoP3(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP3('./images/projects/srp3.gif');
                    }, 0);
                    setShowDemoP3(true);
                    }}
                onTouchMove={() => {
                    setShowGifP3('...');
                    setShowDemoP3(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP3 &&
                        <img src="./images/projects/p3.png" alt="project 3" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP3 && 
                        <img src={showGifP3} alt="project 3" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
                <div className="col-sm-4 text-sm-start text-center"
                style={{color: '#47177F', textAlign: 'left', zIndex: '999'}}>
                    <h4 className="d-none d-sm-inline">: 3</h4>
                    <a href="https://pokemon-quizzr.netlify.app/" 
                    className="mx-2 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                        <h2 className="d-none d-sm-block">Pokemon Quizzr </h2>
                    </a>
                    <div>
                        <p
                        className="floatTextBox"
                        style={{background: '#716FD8',padding: '1rem', borderRadius: '5px',color: 'white'}}>
                            Pokemon Quizzr is a web quiz app that lets you browse and search all 898 pokemon on the Pokedex, play a quiz game from any pokemon generation of your choice, and tracks your score to be display on the Leaderboard. To add, it is accessible, interactive and responsive on any device!
                            
                        </p>
                        <p>
                            ReactJS | Firebase | Firestore | Pokemon API | Bootstrap
                        </p>
                        <p>
                            <a href="https://github.com/kendlc/Project3-Pokequizzr" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={25} alt="Github"/>
                            </a>
                            <a href="https://pokemon-quizzr.netlify.app/" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/demo.svg" 
                                width={25}alt="Live Site"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row d-flex d-flex justify-content-center mt-5">
                <h2 className="d-inline d-sm-none"
                style={{color: '#47177F'}}>
                    : 2 Expense Trackr
                </h2>
                <div className="col-sm-6 hoverImage  mb-sm-4 d-block d-sm-none"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP2('./images/projects/srp2.gif');
                    }, 0);
                    setShowDemoP2(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP2('...');
                    setShowDemoP2(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP2('./images/projects/srp2.gif');
                    }, 0);
                    setShowDemoP2(true);
                    }}
                onTouchMove={() => {
                    setShowGifP2('...');
                    setShowDemoP2(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP2 &&
                        <img src="./images/projects/p2.png" alt="project 2" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP2 && 
                        <img src={showGifP2} alt="project 2" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
                <div className="col-sm-4 text-sm-end text-center"
                style={{color: '#47177F', textAlign: 'right', zIndex: '999'}}>
                    <h4 className="d-none d-sm-inline">: 2</h4>
                    <a href="https://expense-trackr0.netlify.app/" 
                    className="mx-2 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                        <h2 className="d-none d-sm-block">Expense Trackr </h2>
                    </a>
                    <div>
                        <p
                        className="floatTextBoxRight"
                        style={{background: '#716FD8',padding: '1rem', borderRadius: '5px',color: 'white'}}>
                            In this group project, the team utilize collaborated to make an Expense Trackr application that helps you to organize your finances keeping track of all your expenses and incomes. It was built to have web and mobile responsiveness on all devices.
                        </p>
                        <p>
                            ReactJS | Ruby on Rails | PostgreSQL | Bootstrap | CSS 
                        </p>
                        <p>
                            <a href="https://github.com/kendlc/Project2-Expense-Trackr-Client" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={25} alt="Github"/>
                            </a>
                            <a href="https://expense-trackr0.netlify.app/" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/demo.svg" 
                                width={25} alt="Live Site"/>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 hoverImage  mb-sm-4 d-none d-sm-block"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP2('./images/projects/srp2.gif');
                    }, 0);
                    setShowDemoP2(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP2('...');
                    setShowDemoP2(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP2('./images/projects/srp2.gif');
                    }, 0);
                    setShowDemoP2(true);
                    }}
                onTouchMove={() => {
                    setShowGifP2('...');
                    setShowDemoP2(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP2 &&
                        <img src="./images/projects/p2.png" alt="project 2" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP2 && 
                        <img src={showGifP2} alt="project 2" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
            </div>

            <div className="row d-flex d-flex justify-content-center mt-5">
                <h2 className="d-inline d-sm-none"
                style={{color: '#47177F'}}>
                    : 1 Manga-Shoppu
                </h2>
                <div className="col-sm-6 hoverImage  mb-sm-4"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP1('./images/projects/srp1.gif');
                    }, 0);
                    setShowDemoP1(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP1('...');
                    setShowDemoP1(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP1('./images/projects/srp1.gif');
                    }, 0);
                    setShowDemoP1(true);
                    }}
                onTouchMove={() => {
                    setShowGifP1('...');
                    setShowDemoP1(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP1 &&
                        <img src="./images/projects/p1.png" alt="project 1" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP1 && 
                        <img src={showGifP1} alt="project 1" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
                <div className="col-sm-4 text-sm-start text-center"
                style={{color: '#47177F', textAlign: 'left', zIndex: '999'}}>
                    <h4 className="d-none d-sm-inline">: 1</h4>
                    <a href="https://kendlc.github.io/Project0-Tictactoe/" 
                    className="mx-2 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                        <h2 className="d-none d-sm-block">Manga-Shoppu </h2>
                    </a>
                    <div>
                        <p
                        className="floatTextBox"
                        style={{background: '#716FD8',padding: '1rem', borderRadius: '5px',color: 'white'}}>
                            Manga-shoppu is an e-commerce web application project that allows users to purchase different kind of mangas. Users can add products to their carts, have a subtotal and total costs on their cart and checkout. While admin users can create and add products.
                        </p>
                        <p>
                            Ruby on Rails | PostgreSQL | Jikan API | HTML | CSS
                        </p>
                        <p>
                            <a href="https://github.com/kendlc/Project0-Tictactoe" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={25} alt="Github"/>
                            </a>
                            <a href="https://kendlc.github.io/Project0-Tictactoe/" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/demo.svg" 
                                width={25}alt="Live Site"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row d-flex d-flex justify-content-center mt-5">
                <h2 className="d-inline d-sm-none"
                style={{color: '#47177F'}}>
                    : 0 Sumi-e TicTacToe
                </h2>
                <div className="col-sm-6 hoverImage  mb-sm-4 d-block d-sm-none"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP0('./images/projects/srp0.gif');
                    }, 0);
                    setShowDemoP0(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP0('...');
                    setShowDemoP0(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP0('./images/projects/srp0.gif');
                    }, 0);
                    setShowDemoP0(true);
                    }}
                onTouchMove={() => {
                    setShowGifP0('...');
                    setShowDemoP0(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP0 &&
                        <img src="./images/projects/p0.png" alt="project 0" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP0 && 
                        <img src={showGifP0} alt="project 0" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
                <div className="col-sm-4 text-sm-end text-center"
                style={{color: '#47177F', textAlign: 'right', zIndex: '999'}}>
                    <h4 className="d-none d-sm-inline">: 0</h4>
                    <a href="https://kendlc.github.io/Project0-Tictactoe/" 
                    className="mx-2 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                        <h2 className="d-none d-sm-block">Sumi-e TicTacToe </h2>
                    </a>
                    <div>
                        <p
                        className="floatTextBoxRight"
                        style={{background: '#716FD8',padding: '1rem', borderRadius: '5px',color: 'white'}}>
                            In making this project, I utilised Javascript, CSS, and jQuery to make a fun interactive TicTacToe game that lets you play 1v1 and demonstrates a nice responsive UI.
                        </p>
                        <p>
                            jQuery | Javascript | HTML | CSS 
                        </p>
                        <p>
                            <a href="https://github.com/kendlc/Project0-Tictactoe" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/github.svg" 
                                width={25} alt="Github"/>
                            </a>
                            <a href="https://kendlc.github.io/Project0-Tictactoe/" 
                            className="mx-2" target="_blank" rel="noreferrer">
                                <img src="./images/svg/demo.svg" 
                                width={25} alt="Live Site"/>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 hoverImage  mb-sm-4 d-none d-sm-block"
                onMouseEnter={() =>{ 
                    setTimeout(() => {
                        setShowGifP0('./images/projects/srp0.gif');
                    }, 0);
                    setShowDemoP0(true);
                    }}
                onMouseLeave={() => {
                    setShowGifP0('...');
                    setShowDemoP0(false);
                }}
                onTouchStart={() => { 
                    setTimeout(() => {
                        setShowGifP0('./images/projects/srp0.gif');
                    }, 0);
                    setShowDemoP0(true);
                    }}
                onTouchMove={() => {
                    setShowGifP0('...');
                    setShowDemoP0(false);
                }}
                style={{width: '636px', height: '360px'}}
                >
                    { !showDemoP0 &&
                        <img src="./images/projects/p0.png" alt="project 0" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px', filter: "sepia(100%) hue-rotate(190deg) saturate(500%)", opacity: '0.7'}}
                        />
                    }

                    { showDemoP0 && 
                        <img src={showGifP0} alt="project 0" draggable="false"
                        className="img-fluid"
                        style={{borderRadius: '5px'}}
                        />
                    }
                </div>
            </div>

            {/* <div className="row d-flex h-50">
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
            </div> */}
        </div>
    );
}

export default Projects;