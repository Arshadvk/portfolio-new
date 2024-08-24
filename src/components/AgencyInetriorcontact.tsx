import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
// import nodemailer from "nodemailer"
// Image
import map from "../assets/images/map.png"

const AgencyInteriorContact: React.FC = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // Access form field values
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');
        const comments = formData.get('comments');

        const validationError = validateForm(name, email, number, comments);
        if (validationError) {
            setErrorMsg(validationError);
            return;
        }
        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: 'your-email@gmail.com', // Your email
        //         pass: 'your-email-password',  // Your email 
        //     }
        // })
        // // Email options
        // const mailOptions = {
        //     from: 'your-email@gmail.com',          // Sender address
        //     to: 'recipient-email@example.com',     // List of recipients
        //     subject: 'Subject of the email',       // Subject line
        //     text: 'Hello, this is the email body!', // Plain text body
        //     html: '<b>Hello, this is the email body!</b>' // HTML body (optional)
        // };
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log('Email sent: ' + info.response);
        // });
        form.reset();
        setErrorMsg('');
    };

    const validateForm = (name: any, email: any, number: any, comments: any) => {
        if (!name || name.trim() === '') {
            return 'Please enter your name.';
        }
        if (!email || email.trim() === '') {
            return 'Please enter your email.';
        }
        if (!number || number.trim() === '') {
            return 'Please enter a phone number.';
        }
        if (!comments || comments.trim() === '') {
            return 'Please enter your comments.';
        }
        return '';
    };

    return (
        <React.Fragment>
            <section className="section pb-0" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Contact Us</h2>
                                <p>  Simply complete the quick contact form bellow and I’ll reply (usually within one working day) to discuss your requirements and business goals.                               </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={5}>
                            <div className="mt-4">
                                <div style={{ backgroundImage: `url${map}`, backgroundRepeat: "no-repeat" }} className="pb-3">
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-map-marker f-22 me-4" ></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted"> Hamdan Street , Abu dhabi
                                                <br /> United Arab Emirates
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-phone f-22 me-4"></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">Phone: +971 503-083-607 <br /> </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-email f-22 me-4"></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">Email: arshadvk7560@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="custom-form mt-4">
                                <Form onSubmit={handleInputChange} name="myForm" id="myForm">
                                    {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="name" id="name" type="text" placeholder="Your Name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="email" id="email" type="email" placeholder="Your Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="number" id="number" type="number" placeholder="Phone Number" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="comments" id="comments" as="textarea" rows={5} placeholder="Your Message" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mt-3">
                                                <Button type="submit" id="submit" name="send" className="submitBnt btn btn-md btn-dark-custom">Send Message</Button>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>

                    </Row>

                </Container>
                <Col lg={12}>
                    <div className="startup-map mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5616.63654774071!2d54.35737321238354!3d24.486948078083913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6791bddb9df7%3A0x75fc2b22278f7875!2sHamdan%20Street!5e1!3m2!1sen!2sae!4v1724055127018!5m2!1sen!2sae"
                            height="350"
                            style={{ border: 0, width: '100%' }}
                            allowFullScreen
                            title="Google Map"
                        ></iframe>
                    </div>
                </Col>
            </section>
        </React.Fragment>
    )
}

export default AgencyInteriorContact;