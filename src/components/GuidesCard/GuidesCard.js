import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './GuidesCard.css';
import { Link } from 'react-router-dom';

function GuidesCard() {

    return(
        <>
            <section className="mt-5">
                <Container>
                    <Row className="gy-4">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="guide-card">
                                <Card.Body>
                                <Button variant="secondary" className="rounded-pill mb-4" size="sm">Small button</Button>
                                    <Card.Title className="d-block" as={Link} to="/how-it-works">ISO/IEC 42001:2023 Compliance and Implementation</Card.Title>
                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                        <p>June 5, 2024</p>
                                        <Button variant="primary" className="rounded-pill">Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={6} md={12} className="text-center">
                            <Button variant="primary">Load More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default GuidesCard;