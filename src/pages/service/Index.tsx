import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import node from "../../assets/images/skills/node.png"
import next from "../../assets/images/skills/nextjs.png"
import php from "../../assets/images/skills/php.png"
import laravel from "../../assets/images/skills/laravel.png"
import expressjs from "../../assets/images/skills/expressjs.png"
import mongodb from "../../assets/images/skills/mongodb.png"
import react from "../../assets/images/skills/react.png"
import tailwind from "../../assets/images/skills/tailwind.png"
import typescript from "../../assets/images/skills/typescript.png"
import bootstrap from "../../assets/images/skills/bootstrap.png"
import dsa from "../../assets/images/skills/dsa.png"


interface ServicesData {
    icon: string; title: string; description?:string;
}

interface BookChapter {
    icon: string; title: string; path ?: string;
}
const servicesData: ServicesData[] = [
    { icon: 'pe-7s-pen', title: 'Web design',  description: "Crafting visually stunning and user-friendly designs, ensuring that your digital presence stands out while capturing your brand's essence. We believe that every pixel has a purpose"},
    { icon: 'pe-7s-config', title: 'Web development',  description: "Building robust and scalable websites with a focus on performance and security. From concept to deployment, we deliver seamless functionality to meet your business goals."},
    { icon: 'pe-7s-camera', title: 'Photography',  description: "Capturing moments that tell your story through a lens. Our photography services bring your vision to life with attention to detail and creativity."},
    { icon: 'pe-7s-camera', title: 'Videography',  description: "Transforming ideas into compelling visual narratives. Our videography service ensures every frame speaks volumes, capturing the essence of your message."},
    { icon: 'pe-7s-edit', title: 'Video Editing',  description: "Piecing together the perfect story with precision. Our video editing service enhances your footage, creating impactful and engaging content."},
    { icon: 'pe-7s-graph3', title: 'Ui / Ux Design',  description: "Designing intuitive and engaging interfaces that offer users a seamless experience. We focus on usability and aesthetics to elevate your digital product."},
    { icon: 'pe-7s-phone', title: 'Responsive Design', description: "Ensuring your website looks stunning and functions flawlessly across all devices. Our responsive design adapts to any screen size, providing a consistent user experience." },
    { icon: 'pe-7s-helm', title: 'Seo Friendly',  description: "Optimizing your website to rank higher on search engines. We implement SEO best practices to boost your visibility and drive organic traffic."},
    { icon: 'pe-7s-tools', title: 'Support', description: "Providing ongoing support to keep your website running smoothly. We're here to help with any technical issues, updates, or improvements." }
];


const chapterData: BookChapter[] = [
    { icon: 'pe-7s-rocket', title: 'Next.js', path : next },
    { icon: 'pe-7s-camera', title: 'PHP', path : php },
    { icon: 'pe-7s-medal', title: 'Laravel',path : laravel },
    { icon: 'pe-7s-like', title: 'Express Js', path : expressjs},
    { icon: 'pe-7s-node', title: 'Node Js',path : node },
    { icon: 'pe-7s-diamond', title: 'MongoDB', path : mongodb},
    { icon: 'pe-7s-diamond', title: 'React Js', path : react},
    { icon: 'pe-7s-diamond', title: 'Tailwind CSS',path: tailwind },
    { icon: 'pe-7s-diamond', title: 'Type Script',path : typescript},
    { icon: 'pe-7s-diamond', title: 'Bootstrap',path : bootstrap },
    { icon: 'pe-7s-diamond', title: 'DSA', path : dsa },
];

const Service = () => {
  return (
    <React.Fragment>
        <section className="section photographer-services" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">Whether You Are Starting A New Business Or Growing An Existing One <br /> We’ve Got You Covered.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(servicesData || [])?.map((service: ServicesData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="photographer-services-box p-3 mt-4">
                                    <div className="photographer-services-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h4 className="photographer-services-title mt-4 f-15 letter-spacing_2 text-uppercase">{service.title}</h4>
                                    <p className="text-muted mt-4 mb-0">{service.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
        </section>

        <section className="section" id="services">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Skills / Tools</h2>
                                {/* <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p> */}
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(chapterData || [])?.map((item: BookChapter, index: number) => (
                            <Col xs={6} lg={2} key={index}>
                                <div className="book-services-box text-center mt-4">
                                    <div className="book-services-icon">
                                        {/* <i className={item.icon}></i> */}
                                        <img src={item.path} height={20} alt="" />

                                    </div>
                                    <h4 className="f-15 text-uppercase letter-spacing_2 mt-3">{item.title}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
    </React.Fragment>
  )
}

export default Service