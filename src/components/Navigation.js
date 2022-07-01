import React from "react";
import "./Navigation.css";

const Navigation = () => {

    return (
        <div>
            <nav 
            id="navPort"
            className="navgtr navbar navbar-expand-lg fixed-top bgOnSmall"
            style={{fontSize: '20px', fontWeight: 'bold', height: '100px'}}>
                <div className="container container-fluid" style={{marginTop: '-25px'}}>
                    <a className="navbar-brand" href="/">
                        <img src="./images/icon.png" width={45} alt="ken"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="offcanvas offcanvas-end navOffset" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                    >
                    <div className="offcanvas-header">
                        
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item"
                        >
                            <a className="nav-link" aria-current="page" href="#about">
                                    <img src="./images/svg/person.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                    <span className="mx-2 text-light">About</span>
                            </a>
                        </li>
                        <li className="nav-item"
                        >
                            <a className="nav-link" aria-current="page" href="#projects">
                                <img src="./images/svg/file-earmark-code.svg" width={25} alt="Projects" className="mb-1 mx-1"/>
                                <span className="mx-2 text-light">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item"
                        >
                            <a className="nav-link" aria-current="page" href="#contact">
                                <img src="./images/svg/chat-left-dots.svg" width={25} alt="Contacts" className="mb-1 mx-1"/>
                                <span className="mx-2 text-light">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./KenDelaCruz-Resume.pdf" download>
                                <img src="./images/svg/file-earmark-pdf.svg" width={25} alt="Resume" className="mb-1 mx-1"/>
                                <span className="mx-2 text-light">Resume</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;