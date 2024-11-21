import React from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function BigPicture() {

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
                            <h1>See the big picture now</h1>
                            <p>We designed the starter tier with founders, CTO, and alike in mind so they could focus less on security and compliance and more on growing their business. This program allows for a proper foundation that will allow your organization to scale securely while quickly adapting to industry requirements, expansion, and other inevitable needs you will face.</p>
                            <Card className="bg-primary ciso-card mt-4">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Custom Policy Development</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Single Sign-On</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Tasks Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Automated Gap Analysis</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Compliance Management</ListGroup.Item>
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

export default BigPicture;