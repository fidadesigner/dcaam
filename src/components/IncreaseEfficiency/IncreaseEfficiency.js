import React from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function IncreaseEfficiency() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <>
            <section id="section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={5}>
                            <img src={`${assetPath}images/audit-prep-img1.png`} alt="Logo" className="img-fluid audit-prep-img" />
                        </Col>
                        <Col xs={12} sm={12} md={1}></Col>
                        <Col xs={12} sm={12} md={6}>
                            <h1>Increase Efficiency and Business Intelligence</h1>
                            <p>Bring enterprise-level insights to your information security and compliance program. Reduce the stress from tense audit schedule requirements and streamline how your organization manages risk with Compyl, the only all-in-one information security, and compliance platform.</p>
                            <Card className="bg-primary ciso-card mt-4">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Access Entitlement Reviews</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Penetration Testing</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Audit Evidence Generation</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Phishing & Training Simulation</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Incident Management</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default IncreaseEfficiency;