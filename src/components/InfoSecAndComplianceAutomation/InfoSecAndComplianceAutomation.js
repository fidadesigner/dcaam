import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './InfoSecAndComplianceAutomation.css';

function InfoSecAndComplianceAutomation() {

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={12} className="text-center">
                            <h1>End-to-end InfoSec and Compliance <br />Automation Platform</h1>
                            <p>DCAAM will scale with your organization as your needs evolve. Today your focus may be on a SOC 2 certification, but as you scale, <br />DCAAM will support your growth by proactively implementing risk mitigation strategies and adapting quickly to industry requirements.</p>
                        </Col>
                    </Row>
                    <Row className="mt-4 gy-4 align-items-stretch">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Frameworks</Card.Title>
                                    <Card.Text>
                                    Assign ownership and track the progress of each control. Maintain visibility as you achieve your first certification.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Custom Development</Card.Title>
                                    <Card.Text>
                                    Work with our Information Security professionals to develop policies tailored to your organizations.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Single Sign-On</Card.Title>
                                    <Card.Text>
                                    Allow a user to use login credentials such as username and password or multi-factor authentication to access applications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Tasks Management</Card.Title>
                                    <Card.Text>
                                    A central location for all tasks that must be completed to maintain continuous security and compliance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Automated Gap Analysis</Card.Title>
                                    <Card.Text>
                                    Identify the areas of weakness within an organization and then implement proper security controls to improve the overall security posture
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="text-center h-100">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                    <Card.Title>Risk Management</Card.Title>
                                    <Card.Text>
                                    Bring consistency to how an organization evalutes risk with a centralized log for all users.
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

export default InfoSecAndComplianceAutomation;