import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MoveShift.css';

function MoveShift() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Move from Point-in-Time to Real-Time</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5 align-items-center">
                        <Col xs={12} sm={12} md={5}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Automate Manual Work</Card.Title>
                                    <Card.Text>
                                    Integrate with the systems your business relies on to automatically collect evidence and assess residual risk
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Real-time Alerting</Card.Title>
                                    <Card.Text>
                                    Continuously monitor controls on your preferred cadence and instantly notify owners of changes
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Confidence and Visibility</Card.Title>
                                    <Card.Text>
                                    Get a real-time view of compliance and risk and the level of reporting you need to be prepared for discussions at every level.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={1}></Col>    
                        <Col xs={12} sm={12} md={6}>
                            <img src={`${assetPath}images/move-shift-img1.png`} alt="Logo" className="img-fluid home-banner-img" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Shift from Reactive to Proactive Risk Management</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5 align-items-center">
                        <Col xs={12} sm={12} md={6}>
                            <img src={`${assetPath}images/move-shift-img1.png`} alt="Logo" className="img-fluid home-banner-img" />
                        </Col>
                        <Col xs={12} sm={12} md={1}></Col>
                        <Col xs={12} sm={12} md={5}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Centralize your information</Card.Title>
                                    <Card.Text>
                                    Centralize policies, contracts, vendors, IT assets, incidents for easy management and reuse. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Use a Unified Risk Register</Card.Title>
                                    <Card.Text>
                                    Consolidate, track and manage risks in one place for a comprehensive view of risk while ensuring consistency and accountability across the organization.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>Mitigate Risk with Confidence</Card.Title>
                                    <Card.Text>
                                    Gain visibility into control gaps and prioritize risk mitigation plans with confidence.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default MoveShift;