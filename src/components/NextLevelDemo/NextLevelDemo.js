import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './NextLevelDemo.css';

function NextLevelDemo() {

    return(
        <>
            <section id="section" className="bg-grey custom-pt-pb-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Take your business to the next level</h1>
                            <p>Become the authority in your space!</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={12} md={12}>
                            <Form className="d-block d-md-flex justify-content-center align-items-center">
                                <Form.Group className="mb-3 w-25" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3 w-25 ms-md-4 ms-0 me-md-4 me-0" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 d-grid">
                                    <Form.Label className="invisible">Email</Form.Label>
                                    <Button size="lg" variant="primary">Request Demo</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default NextLevelDemo;