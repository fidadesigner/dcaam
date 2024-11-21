import React from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './CompareProducts.css';

function CompareProducts() {

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Compare Products</h1>
                        </Col>
                    </Row>
                    <Row className="mt-2 gy-4">
                        <Col xs={12} sm={4} md={4}>
                            <Card className="bg-grey product-card">
                                <Card.Header className="bg-primary text-white text-center">
                                    <h5>Audit Prep</h5>
                                    <p className="mb-0">Start Ups</p>
                                </Card.Header>
                                <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Unlimited users, Unlimited Integrations, Single Sign On.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Small businesses beginning to build a compliance and audit program.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Compliance and Audits are required.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent border-0"><i class="text-primary ri-checkbox-circle-fill me-2"></i>We're trying to expand our capability, reduce effort and automate tasks.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-primary border-0"><strong>WHAT IS INCLUDED?</strong></ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>1 Frameworks (SOC 2 or ISO 27001)</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Shared Customer Service Associated</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>User training on DCAAM</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Readiness Assessment</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Automated Control Monitoring</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Information Security Mgmt System</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Asset Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Vendor List Management</ListGroup.Item>
                                </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <Card className="bg-grey product-card">
                                <Card.Header className="bg-primary text-white text-center">
                                    <h5>GRC</h5>
                                    <p className="mb-0">Most Popular</p>
                                </Card.Header>
                                <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Unlimited users, Unlimited Integrations, Single Sign On.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Small businesses beginning to build a compliance and audit program.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Compliance and Audits are required.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent border-0"><i class="text-primary ri-checkbox-circle-fill me-2"></i>We're trying to expand our capability, reduce effort and automate tasks.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-primary border-0"><strong>WHAT IS INCLUDED?</strong></ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>1 Frameworks (SOC 2 or ISO 27001)</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Shared Customer Service Associated</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>User training on DCAAM</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Readiness Assessment</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Automated Control Monitoring</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Information Security Mgmt System</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Asset Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Vendor List Management</ListGroup.Item>
                                </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <Card className="bg-grey product-card">
                                <Card.Header className="bg-primary text-white text-center">
                                    <h5>Enterprise</h5>
                                    <p className="mb-0">MSP</p>
                                </Card.Header>
                                <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Unlimited users, Unlimited Integrations, Single Sign On.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Small businesses beginning to build a compliance and audit program.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Compliance and Audits are required.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent border-0"><i class="text-primary ri-checkbox-circle-fill me-2"></i>We're trying to expand our capability, reduce effort and automate tasks.</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-primary border-0"><strong>WHAT IS INCLUDED?</strong></ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>1 Frameworks (SOC 2 or ISO 27001)</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Shared Customer Service Associated</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>User training on DCAAM</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Readiness Assessment</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Automated Control Monitoring</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Information Security Mgmt System</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Asset Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent"><i class="text-primary ri-checkbox-circle-fill me-2"></i>Vendor List Management</ListGroup.Item>
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

export default CompareProducts;