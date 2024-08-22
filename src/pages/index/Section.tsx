import React, { useState } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter';

// Image
import shape from "../../assets/images/home-softwere-shape.png"

import feature4 from "../../assets/images/features/feature-4.png"
import feature5 from "../../assets/images/features/feature-5.png"


import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import InteriorConstructionWork from '../../components/InteriorConstructionWork';

interface SoftwareAboutData {
  icon: string; title: string;
}

interface Testimonials {
  id: number; author: string; role: string; image: string;
}

const softwareAboutData: SoftwareAboutData[] = [
  { icon: 'pe-7s-light', title: 'Creative Design', },
  { icon: 'pe-7s-portfolio', title: 'Easy to Use', },
  { icon: 'pe-7s-like2', title: 'Secure Data' }
];

const testimonials: Testimonials[] = [
  { id: 1, author: 'Dennis Hammer', role: 'Founder', image: user1 },
  { id: 2, author: 'Robert Chea', role: 'Designer', image: user2 },
  { id: 3, author: 'Victor Smith', role: 'Manager', image: user3 }
];


const Section = () => {

  // modal
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <React.Fragment>
      {/* Home */}
      <section className="softwere-home" id="home">
        <div className="bg-overlay"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="softwere-home-content text-white mt-4">
                    <h4 className="softwere-home-title text-uppercase line-height_1_4 letter-spacing_4">
                    I'M Arshad Vk
                    </h4>
                    <p className="softwere-home-desc f-15 mt-4 mx-auto">
                      I am Software Developer at Maxhome Properties in Abu Dhabi Uae 
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Row>
                <div className="softwere-home-shape-img">
                  <img src={shape} alt="" className="img-fluid mx-auto d-block" />
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section software-about" id="about">
        <Container>
          <Row>
            {(softwareAboutData || [])?.map((item: SoftwareAboutData, index: number) => (
              <Col lg={4} key={index}>
                <div className="softwere-about-box text-center p-3">
                  <div className="softwere-about-icon">
                    <i className={item.icon} />
                  </div>
                  <h4 className="f-15 text-uppercase letter-spacing_2 mt-4">{item.title}</h4>
                  <p className="text-muted mt-4">Quisque rutrum vamus lectus nulla dictum venenatis celerisque felis porta morbi conentum vebulum libero.</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <hr />

      <InteriorConstructionWork />


      {/* Features */}
      <section className="section" id="features">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Features</h2>
                <p className="heading-title-desc text-muted mt-4">
                  Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                  commodo nibh malesuada sollis diam.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-3 align-items-center">
            <Col lg={6}>
              <div className="softwere-features-img mt-4">
                <img src={feature4} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="softwere-features-content">
                <p className="f-20 text-muted">01.</p>
                <h4 className="mt-4 text-uppercase f-20 letter-spacing_2">Beautiful Features</h4>
                <p className="softwere-features-desc text-muted mt-4">
                  Vestibulum vehicula tincidunt metus viverra diam socitudin donec consectetur massa vel tincidunt sed
                  vitae aliquam mauris cursus sed felis a porta aliquam volutpat In mattis justo sit amet sem porttitor
                  imperdie morbi blandit augue fermentum.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-md btn-dark-custom">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-5 align-items-center">
            <Col lg={6}>
              <div className="softwere-features-content">
                <p className="f-20 text-muted">02.</p>
                <h4 className="mt-4 text-uppercase f-20 letter-spacing_2">Real Time Systems</h4>
                <p className="softwere-features-desc text-muted mt-4">
                  Vestibulum vehicula tincidunt metus viverra diam socitudin donec consectetur massa vel tincidunt sed
                  vitae aliquam mauris cursus sed felis a porta aliquam volutpat In mattis justo sit amet sem porttitor
                  imperdie morbi blandit augue fermentum.
                </p>

                <div className="mt-4">
                  <Link to="#" className="btn btn-md btn-dark-custom">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="softwere-features-img mt-4">
                <img src={feature5} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Counter */}
      <Counter />


      <hr />

      {/* Customer */}
      <section className="section testimonial" id="client">
        <Container>
          <Row className=" justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Customers</h2>
                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
              </div>
            </div>
          </Row>

          <Row className=" mt-5 pt-3">
            <Col lg={12}>
              <Carousel id="agency-owl-demo" controls={true} prevIcon={<i className="mdi mdi-menu-left"></i>} nextIcon={<i className="mdi mdi-menu-right"></i>}>
                {(testimonials || [])?.map((item: Testimonials) => (
                  <Carousel.Item key={item.id}>
                    <div className="agency-testimonial-box text-center ml-2 mr-2 p-5">
                      <div className="agency-testi-desc bg-white">
                        <p className="text-muted f-17 mb-0">Dolorem ipsum quia dolor sit amet consectetur adipisci velit modi numquam tempora incidunt labore dolore magnam aliquam quaerat voluptatem enim laboriosam aliquid commodi consequatur.</p>
                      </div>
                      <div className="agency-testimonial-img mt-5 pt-3">
                        <img src={item.image} className="img-fluid rounded-circle" alt="" />
                        <div className="mt-4">
                          <h5 className="text-uppercase f-15 letter-spacing_2">{item.author}</h5>
                          <p className="text-muted f-13 mb-0">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video */}
      <section className="section cta-2">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="app-video-box text-center text-white">
                <h2 className="app-video-title text-uppercase">Watch Video</h2>
                <p className="app-video-desc f-16 mx-auto mt-4 pt-2">
                  Always holds these matters principle of selection he rejects pleasures to secure other greater pleasures else
                  pains.
                </p>

                <div className="mt-5 app-video-icon">
                  <Link to="#" className="modal-btn" onClick={openModal}>
                    <span className="avatar-sm">
                      <span className="rounded-circle btn-icon">
                        <i className="mdi mdi-play text-white"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </React.Fragment>
  )
}

export default Section