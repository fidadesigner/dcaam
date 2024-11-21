import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './DemoForm.css';

function DemoForm() {

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
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
                            <Form.Label>Copany Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter company name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" controlId="company_size">
                            <Form.Label>Copany Size</Form.Label>
                            <Form.Select size="lg" aria-label="company size">
                                <option>--Select Copany Size--</option>
                                <option value="1">0-50</option>
                                <option value="2">51-100</option>
                                <option value="3">101-200</option>
                                <option value="3">200+</option>
                            </Form.Select>
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
                            <Button size="lg" className="mt-4" variant="primary">Request Demo</Button>
                        </Col>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DemoForm;