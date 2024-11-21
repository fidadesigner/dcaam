import React from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function SolutionForMaturing() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

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
                            <h1>Only Solution for Maturing Compliance & Risk Management</h1>
                            <p>Maintaining a security program at the enterprise level is very challenging. With Compyl, you will rapidly mature your enterprise security program and implement continuous compliance through our advanced integrations.</p>
                            <Card className="bg-primary ciso-card mt-4">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Contract Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Enterprise Vendor Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Enterprise Risk Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>KPI Reporting</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Logical Role Based Access</ListGroup.Item>
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

export default SolutionForMaturing;