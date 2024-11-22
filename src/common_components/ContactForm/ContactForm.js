import React from "react";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './ContactForm.css';

function ContactForm() {

    return(
        <>
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col xs={12} sm={12} md={10}>
                        <Card className="py-4 px-md-3 px-1 form-card">
                            <Card.Body className="text-center">
                                <h1>Contact Us</h1>
                                <p>DCAAM, the trusted solution for continuous information security and compliance monitoring.</p>
                            </Card.Body>
                            <Card.Body className="mt-4">
                            <Form className="row">
                                <Form.Group className="mb-3 col-md-6" controlId="fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter first name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter last name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="company_email">
                                    <Form.Label>Company Email</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Enter company email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="company_name">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter company name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="company_size">
                                    <Form.Label>Company Size</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter company size" />
                                </Form.Group>
                                <Form.Label className="mt-4"><strong>Where did you hear about us?</strong></Form.Label>
                                <Form.Group className="mb-3 col-md-12 d-flex align-items-center flex-wrap" id="hear_about_us">
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Search Engine (Google/Bing)" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Social Media" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Event/Conference" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Podcast" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Third-Party Review Site" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="From a Friend" />
                                    <Form.Check className="me-4 mb-3" type="checkbox" label="Other" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-12" controlId="msg">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
                                </Form.Group>
                                <Col xs={12}sm={12} md={12} className="text-center">
                                    <Button size="lg" className="mt-4" variant="primary">Submit Now</Button>
                                </Col>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactForm;