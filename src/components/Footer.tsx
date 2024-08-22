import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const footerData = [
    { icon: 'pe-7s-call', title: 'Call Us', description: 'If you have any query about Prosoft, please call us on', },
    { icon: 'pe-7s-comment', title: 'Chat With Us', description: 'If you need live support, chat with our technical team now', },
];


const Footer: React.FC = () => {
    return (

        <React.Fragment>
        <footer className="section agency-footer bg-softwere-footer pb-5">
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div>
                            <h6 className="footer-heading text-uppercase fw-bold f-13">Pages</h6>
                            <ul className="list-unstyled footer-link mt-3 mb-0">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
    
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div>
                            <h6 className="footer-heading text-uppercase fw-bold f-13">Help</h6>
                            <ul className="list-unstyled footer-link mt-3 mb-0">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="#">Login</Link></li>
                                <li><Link to="#">Terms of Services</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </Col>
    
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div>
                            <h6 className="footer-heading text-uppercase fw-bold f-13">Address</h6>
                            <p className="subscribe-desc mt-4 mb-0">
                                <a className='text-white' href="tel:+971503083607">+971 503 083 607</a> <br />
                                <a className='text-white' href="mailto:arshadvk7560@gmail.com">arshadvk7560@gmail.com</a> <br />
                            </p>
                            <p className="subscribe-desc  mt-2 mb-0">
                                Hamdan Street <br />
                                Abu Dhabi <br />
                                United Arab Emirates
                            </p>
                        </div>
                    </Col>
    
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div>
                            <h6 className="footer-heading text-uppercase fw-bold f-13">Stay Connected</h6>
                            <div className='softwere-team'>
                                <div className="mt-4">
                                    <ul className="list-inline softwere-team-social mb-0">
                                        <li className="list-inline-item">
                                            <Link to="https://github.com/Arshadvk" className="rounded-circle">
                                                <i className="mdi mdi-git"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://www.instagram.com/https.arshaad/" className="rounded-circle">
                                                <i className="mdi mdi-instagram"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-circle">
                                                <i className="mdi mdi-facebook"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-circle">
                                                <i className="mdi mdi-whatsapp"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="www.linkedin.com/in/arshad-vk" className="rounded-circle">
                                                <i className="mdi mdi-linkedin"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
    
                <Row className="mt-5">
                    <Col lg={12}>
                        <div className="agency-footer-alt-content p-4">
                            <p className="copy-right text-center mb-0">
                                © {new Date().getFullYear()} Design by Arshad.Vk
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    </React.Fragment>
    
    )
}

export default Footer;