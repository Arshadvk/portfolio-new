import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import photo from "../../assets/images/photographer-about-img.jpg"

const About = () => {
    return (
        <React.Fragment>
            {/* About */}
            <section className="section" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="mt-4">
                                <img src={photo} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="photographer-about-content mt-4 ps-5">
                                <p className="text-muted f-12 text-uppercase letter-spacing_2">Software Developer</p>
                                <h3 className="photographer-about-title text-uppercase mt-3 letter-spacing_4">Muhammed Arshad vk </h3>
                                <div className="photographer-about-border mt-4"></div>
                                <p className="text-muted line-height_1_8 mt-4 pt-2">Hi Everyone, I am  <b> Arshad vk </b>from Kerala, India.
                                I am a self taught <b>Mern Stack Developer</b>. I have a strong interest in web development and I have been self learning and working on Mern stack projects . I have completed 2 main project and some mini projects also.</p>
                                <div className="agency-about-skill mt-4 pt-3">
                                    <div>
                                        <p className="text-uppercase fw-bold f-13 mb-2">Type Script </p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '95%' }}>
                                                <div className="progress-value fw-bold">95%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Node</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%' }}>
                                                <div className="progress-value fw-bold">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">React</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '90%' }}>
                                                <div className="progress-value fw-bold">90%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">PHP</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '60%' }}>
                                                <div className="progress-value fw-bold">60%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Photoshoot</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '40%' }}>
                                                <div className="progress-value fw-bold">40%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Video Editing</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '75%' }}>
                                                <div className="progress-value fw-bold">75%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section" id="resume">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title wow animated fadeInUp">
                                <div className="position-relative">
                                    <h4 className="title text-uppercase">Education & Work Experience</h4>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="main-icon rounded-pill text-center mt-4 pt-2 wow animated fadeInUp" data-wow-delay="0.5s">
                            </div>
                            <div className="timeline-page pt-2 position-relative wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="vertical-line"></div>

                                <div className="timeline-item mt-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="event event-description-right rounded p-4 border float-left text-start">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5 className="title mb-1 text-capitalize">B C A</h5>
                                                    <p className='mb-1'>2021 - 2024</p>
                                                </div>
                                                <small className="company">Rabindranath Tagore University</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Timeline Item */}
                                <div className="timeline-item mt-4 wow animated fadeInUp" data-wow-delay="0.7s">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                            <div className="event event-description-left rounded p-4 border float-left text-end">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='d-flex-col justify-content-start'>
                                                <h5 className="title mb-0 text-capitalize">Freeelancer</h5>
                                                <small className="company">Web Developer</small>
                                                </div>
                                                <p>Dec 2022 - Jan 2024</p>
                                                </div>

                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        </div>
                                    </div>
                                </div>

                                {/* Third Timeline Item */}
                                <div className="timeline-item mt-4 wow animated fadeInUp" data-wow-delay="0.9s">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">

                                        <div className="event event-description-right rounded p-4 border float-left text-start">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5 className="title mb-1 text-capitalize">Software Developer</h5>
                                                    <p className='mb-1'>2024</p>
                                                </div>
                                                <small className="company">Maxhome Property</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default About