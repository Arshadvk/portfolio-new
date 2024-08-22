import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import faq from "../../assets/images/softwere-faq-img.png"
import Subscribe from '../../components/Subscribe';
import Accordions from '../../components/Accordion';
import AgencySoftwareBlog from '../../components/AgencysoftwareBlog';




const Section1 = () => {

    return (
        <React.Fragment>
            {/* Faq */}

            <section className="section book-faqs" id="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Frequently Asked Questions</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={6}>
                            <div className="book-faq-img mt-4 text-center">
                                <img src={faq} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Accordions />
                    </Row>
                </Container>
            </section>

            {/* Blog */}
            <AgencySoftwareBlog />
            <hr />

            {/* Subscribe */}
            <Subscribe />

    
        </React.Fragment>
    )
}

export default Section1