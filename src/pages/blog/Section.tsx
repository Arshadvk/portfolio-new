import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Image
import blog9 from "../../assets/images/blog/blog-9.jpg"
import blog10 from "../../assets/images/blog/blog-10.jpg"
import blog11 from "../../assets/images/blog/blog-11.jpg"
import blog12 from "../../assets/images/blog/blog-12.jpg"
import blog13 from "../../assets/images/blog/blog-13.jpg"

interface BlogPosts {
    id: number; ima: string; title: string
}

const blogPosts: BlogPosts[] = [
    { id: 1, ima: blog9, title: 'Curabitur ligula sapien tincidunt posuere imperdiet.', },
    { id: 2, ima: blog10, title: 'The planet doesn’t need saving. We do..', },
    { id: 3, ima: blog11, title: 'Modern City With Amazing Dark Blue Sea.', },
    { id: 4, ima: blog12, title: 'Runaway A Road Adventure.', },
    { id: 5, ima: blog13, title: 'Sigula sapien tincidunt posuere imperdiet.', },
];

const Section: React.FC = () => {
    return (
        <React.Fragment>
            {/* Home */}
            <section className="blog-standard-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="blog-standard-home-content text-center text-white">
                                        <h4 className="blog-standard-home-title text-uppercase letter-spacing_4">Blog Standard</h4>
                                        <p className="text-uppercase mt-4 f-12 letter-spacing_2 mb-0">Get In Touch With Us</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* Standard Post */}

            <section className="section blog-post">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} className='mb-5'>
                            {(blogPosts || [])?.map((item: BlogPosts, key: number) => (
                                <div key={key} className="blog-post-box text-center mt-4">
                                    <div className="post-standard-title">
                                        <div className="post-img mt-4">
                                            <Link to="#">
                                                <img src={item.ima} className="img-fluid" alt="" />
                                            </Link>
                                        </div>

                                        <div className="blog-standard-content mt-5">
                                            <Link to="#" className="post-subtitle">Lifestyle, Travel</Link>
                                            <h4 className="mt-3"><Link to="#" className="blog-post-title">{item.title}</Link></h4>
                                            <div className="blog-post-info mt-3 fst-italic">
                                                <span className="blog-post-date">
                                                    <Link to="#" className="text-muted pe-2">January 18, 2022 </Link>
                                                </span>
                                                <span className="blog-post-author text-muted ps-2">By
                                                    <Link to="#" className="pe-2">Matilda Josef</Link>
                                                </span>
                                                <span className="blog-post-comment ps-2">
                                                    <Link to="#">3 Comments</Link>
                                                </span>
                                            </div>

                                            <p className="text-muted mt-4">Donec fringilla porta ornare integer turpis velit malesuada ultricies ligula varius imperdiet neque proin posuere lacus scelerisque rhoncus vitae vivamus dignissim massa proin urna augue porttitor dignissim luctus nunc semper felis congue posuere libero ligula dapibus elementum quam dolor est.</p>
                                            <div className="mt-4">
                                                <Link to="#" className="btn btn-md btn-dark-custom">
                                                    Continue Reading
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-5"></hr>
                                </div>

                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
           


        </React.Fragment>
    )
}

export default Section