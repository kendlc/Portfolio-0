import React from "react";

const Navigation = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg mt-4 fixed-top container bgOnSmall"
            style={{fontSize: '20px', fontWeight: 'bold',color: '#9244ED'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./images/icon.png" width={45} alt="ken"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                    style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
                    <div className="offcanvas-header">
                        
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">
                                <img src="./images/svg/person.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">About</span>
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#projects">
                                <img src="./images/svg/file-earmark-code.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#contact">
                                <img src="./images/svg/chat-left-dots.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./KenDelaCruz-Resume.pdf" download>
                                <img src="./images/svg/file-earmark-pdf.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">CV</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>



                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">
                                <img src="./images/person.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">About</span>
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#projects">
                                <img src="./images/file-earmark-code.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#contact">
                                <img src="./images/chat-left-dots.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="./KenDelaCruz-Resume.pdf" download>
                                <img src="./images/file-earmark-pdf.svg" width={25} alt="About" className="mb-1 mx-1"/>
                                <span className="mx-2">CV</span>
                            </a>
                        </li>
                    </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navigation;