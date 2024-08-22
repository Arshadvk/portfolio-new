import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

interface ServicesData {
    icon: string; title: string; description?:string;
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



const Service = () => {
  return (
    <React.Fragment>
        <section className="section photographer-services" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
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
    </React.Fragment>
  )
}

export default Service