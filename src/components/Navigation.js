import React from "react";

const Navigation = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg mt-4 fixed-top container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./images/icon.png" width={45} alt="ken"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">
                                <img src="./images/person.svg" alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">About</span>
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#projects">
                                <img src="./images/file-earmark-code.svg" alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#contact">
                                <img src="./images/chat-left-dots.svg" alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./KenDelaCruz-Resume.pdf" download>
                                <img src="./images/file-earmark-pdf.svg" alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">CV</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;