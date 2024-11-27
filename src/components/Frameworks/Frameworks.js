import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Frameworks.css'

function Frameworks() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <section id="section" className="custom-pt-pb-5"
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>The only Platform that Supports all Security 
                            <br />and Privacy Frameworks</h1>
                            <p>Compyl helps you scale and mature your GRC program to make better, risk-informed decisions to secure and grow your business.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={12} md={12} className="d-flex jusity-content-center flex-wrap">
                            <Card className="text-center rounded-0 border-top-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon1.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>SOC 2</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-top-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon2.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>ISO 27001</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://www.iso.org/standard/27001" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-top-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon3.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>HIPAA</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://www.hhs.gov/hipaa/index.html" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-top-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon4.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>GDPR</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-bottom-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon5.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>PCI DSS</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://www.pcisecuritystandards.org/" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-bottom-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon6.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>NIST CSF</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://www.nist.gov/cyberframework" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-bottom-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon7.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>NIST SP 800-53</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://csrc.nist.gov/publications/sp800" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center rounded-0 border-bottom-0 w-25">
                                <Card.Body>
                                    <img src={`${assetPath}images/framework-icon8.png`} alt="Logo" className="img-fluid framework-icon" />
                                    <Card.Title>HITRUST</Card.Title>
                                    <Card.Text>
                                    Close more deals and build customer trust by effectively proving your commitment to security.
                                    </Card.Text>
                                    <Button variant="link" as={Link} target="_blank" to="https://hitrustalliance.net/" className="text-decoration-none">Learn More <i class="ri-arrow-right-line"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <Button variant="primary">See All Frameworks</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Frameworks;