import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './DiverseNetworkPartners.css';

function DiverseNetworkPartners() {

    return(
        <> 
            <section id="section" className="custom-pt-pb-5 bg-grey">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>We Collaborate with a Diverse Network of Partners</h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="diverse-card mt-4 d-block d-md-flex align-items-center justify-content-between">
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Solution Providers</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Systems Integrators</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Managed Service Providers</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Risk Consulting Firms</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Technology Partners</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default DiverseNetworkPartners;