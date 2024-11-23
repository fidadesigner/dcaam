import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhyJoinDcaam.css';

function WhyJoinDcaam() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/join-bg-img.jpg`;

    return(
        <> 
            <section id="section" className="custom-pt-pb-5"
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Why Join the DCAAM Connect Partner Network</h1>
                            <p>Forging partnerships based on trust and transparency is at the core of how we operate at Compyl. We believe that true collaboration means aligning our efforts to make our joint customers successful. By working together with integrity and a shared commitment to excellence, we build lasting relationships that not only drive business growth but also ensure that our customers thrive. Together, we can deliver exceptional value, build mutual trust, and create a foundation for long-term success.</p>
                        </Col>
                    </Row>
                    <Row className="mt-2 gy-4">
                        <Col xs={12} sm={4} md={4}>
                            <Card className="text-center">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-send-plane-fill"></i></div>
                                    <Card.Title>Scalable GRC Platform</Card.Title>
                                    <Card.Text>
                                    Meet the expectations of today’s customers and align your business with Compyl, the market-leading GRC platform.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <Card className="text-center">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-shake-hands-fill"></i></div>
                                    <Card.Title>Commitment to Success</Card.Title>
                                    <Card.Text>
                                    Get curated partner resources, training programs, and access to a team of compliance experts to help you grow.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <Card className="text-center">
                                <Card.Body>
                                    <div className="icon-circle"><i class="ri-flag-2-fill"></i></div>
                                    <Card.Title>Accelerated Delivery</Card.Title>
                                    <Card.Text>
                                    Drive more value, faster with simplified partner pricing and operational efficiencies that minimize risk for your business.
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

export default WhyJoinDcaam;