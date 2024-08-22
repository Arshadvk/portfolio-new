import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom';

// Custom Hook
import useScroll from '../components/useScroll'
import useActiveLink from '../components/useActiveLink'

// Image
import logoLight from "../assets/images/logo-light.png"
import logoDark from "../assets/images/logo-dark.png"

const Navbar8 = () => {

    // scroll page state call
    const navClass = useScroll();

    const location = useLocation();

  // Function to determine if the link is active
    const isActive = (path: string) => location.pathname === path;
    // activation
    const { activeLink, handleLinkClick } = useActiveLink('.navbar-nav li.active');

    // modal
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg fixed-top navbar-custom tarnsperant-sticky " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand logo" to="#">
                        {/* <img src={logoLight} className="logo-light" alt="" height="16" /> */}
                        <h1 style={{ fontSize: "25px"}}>Arshad<span style={{color : "#E9AA39" , fontSize: "20px" ,fontWeight : "bold"}}>.</span>Vk</h1>
                        {/* <img src={logoDark} className="logo-dark" alt="" height="16" /> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <Navbar.Collapse id="navbarSupportedContent" in={isOpen}>
                        <ul className="navbar-nav ms-auto navbar-center">
                            <li className={`nav-item ${isActive('/') ? 'active' : ''}}`}>
                                <Nav.Link href="/" onClick={() => handleLinkClick('/')}>Home</Nav.Link>
                            </li>
                            <li className={`nav-item ${isActive("/service") ? "active" : ''}`}>
                                <Nav.Link href="/service" onClick={() => handleLinkClick('/service')}>service</Nav.Link>
                            </li>
                           
                            <li className={`nav-item ${isActive("/blog") ? "active" : ''}`}>
                                <Nav.Link href="/blog" onClick={() => handleLinkClick('/blog')}>Blog</Nav.Link>
                            </li>
                            <li className={`nav-item ${isActive("/about" )? "active" : ''}`}>
                                <Nav.Link href="/about" onClick={() => handleLinkClick('/about')}>about</Nav.Link>
                            </li>
                            <li className={`nav-item ${isActive( "/contact") ? "active" : ''}`}>
                                <Nav.Link href="/contact" onClick={() => handleLinkClick('/contact')}>contact</Nav.Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </nav>
        </React.Fragment>
    )
}

export default Navbar8