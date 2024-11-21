import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TrustedPartner.css';

function TrustedPartner() {

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>We are a Trusted Partner</h1>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={1}></Col>
                        <Col xs={12} sm={12} md={10}>
                            <Card className="d-block d-md-flex align-items-center flex-row"
                            style={{background: 'rgba(169, 237, 255, 0.3)'}}
                            >
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                </Card.Body>
                                <Card.Body className="custom-center">
                                    <Card.Title>Data Security</Card.Title>
                                    <Card.Text>
                                        DCAAM monitors our customer environments and stores all data in secure databases with encryption passwords 
                                        protecting all assets. We use tools like Azure Key Vault, Microsoft Identity, Microsoft Authorization, and Secure 
                                        Private endpoints. All uploaded files to Compyl are encrypted and stored in Microsoft Blob Storage.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="d-block d-md-flex align-items-center flex-row mt-4 mb-4"
                            style={{background: 'rgba(169, 237, 255, 0.3)'}}
                            >
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                </Card.Body>
                                <Card.Body className="custom-center">
                                    <Card.Title>Application Security</Card.Title>
                                    <Card.Text>
                                        DCAAM has partnerships with many of the leading third-party penetration services worldwide. We constantly 
                                        evaluate the source code, running applications, and the deployed environments of our customers. To further 
                                        protect customer environments, we store all API keys in Microsoft Key Vault and test Compyl against unit and 
                                        automation testing to allow for a safe and friendly user experience. For further analysis, all internal customer 
                                        environment errors are logged in Microsoft Log Analytics.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="d-block d-md-flex align-items-center flex-row"
                            style={{background: 'rgba(169, 237, 255, 0.3)'}}
                            >
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                </Card.Body>
                                <Card.Body className="custom-center">
                                    <Card.Title>Infrastructure Security</Card.Title>
                                    <Card.Text>
                                        DCAAM uses Azure Web Apps to host our customer environments. We leverage all security products embedded 
                                        within the Azure eco-system, including Key Vault, Blob Storage, Log Analytics, Virtual Networks, and Private 
                                        Endpoints. The Compyl application is powered by a REST API utilizing a microservices architecture. Every call to 
                                        and from our customer environment is secured using HTTPS protocols.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default TrustedPartner;