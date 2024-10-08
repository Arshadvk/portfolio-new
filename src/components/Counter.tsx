import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Counter: React.FC = () => {
    return (
        <React.Fragment>
            <section className="section cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row id="counter">
                        <Col lg={4}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-like"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={3} duration={2} />
                                    <span className="counter_value display-4" id="count1" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Year</h5>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-smile"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={15} duration={2} />
                                    <span className="counter_value display-4" id="count2" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Happy Clients</h5>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-anchor"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={20} duration={2.5} />
                                    <span className="counter_value display-4" id="count3" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Projects</h5>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Counter;