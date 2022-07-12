import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";


const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg"
        className="navgtr fixed-top fixed-top navHeight">
            <Container className="navCont">
                <Navbar.Brand href="#home" data-aos="fade-right">
                    <img src="./images/icon.png" width={45} alt="ken"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3" data-aos="fade-left">
                        <Nav.Link href="#about">
                            <img src="./images/svg/person.svg" width={25} alt="About" className="mb-1 mx-1"/>
                            <span className="mx-2 text-light">About</span>
                        </Nav.Link>
                        <Nav.Link href="#projects">
                            <img src="./images/svg/file-earmark-code.svg" width={25} alt="Projects" className="mb-1 mx-1"/>
                            <span className="mx-2 text-light">Projects</span>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <img src="./images/svg/chat-left-dots.svg" width={25} alt="Contacts" className="mb-1 mx-1"/>
                            <span className="mx-2 text-light">Contact</span>
                        </Nav.Link>
                        <Nav.Link href="./KenDelaCruz-Resume.pdf" download
                        className="lastNavItem">
                                <img src="./images/svg/file-earmark-pdf.svg" width={25} alt="Resume" className="mb-1 mx-1"/>
                                <span className="mx-2 text-light">Resume</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;