import React from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './DownloadGrcRoiGuide.css';

function DownloadGrcRoiGuide() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Download GRC ROI Guide</h1>
                            <img src={`${assetPath}images/download-roi-guide-img.png`} alt="Logo" className="img-fluid download-roi-guide-img mt-4" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={2}></Col>
                        <Col xs={12} sm={12} md={8}>
                            <Form className="row">
                                <Form.Group className="mb-3 col-md-6" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="company_name">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter company name" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter phone" />
                                </Form.Group>
                                <div className="col-md-12">
                                    <Button size="lg" className="w-100 mt-4" variant="primary">Download Now</Button>
                                </div>
                            </Form>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default DownloadGrcRoiGuide;