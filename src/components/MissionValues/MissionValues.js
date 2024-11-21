import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './MissionValues.css';

function MissionValues() {


    return(
        <> 
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Our Mission</h1>
                            <p>Redefine the standards of GRC solutions, crafting flexible, powerful tools that empower organizations to navigate 
                            the complexities of today’s security challenges with confidence and ease.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Our Values</h1>
                        </Col>
                    </Row>
                    <Row className="mt-2 gy-4">
                        <Col xs={12} sm={12} md={4} className="text-center">
                            <div className="circle"><i class="ri-lock-fill"></i></div>
                            <h5 className="card-title">Genuine</h5>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="text-center">
                            <div className="circle"><i class="ri-lock-fill"></i></div>
                            <h5 className="card-title">Aspirational</h5>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="text-center">
                            <div className="circle"><i class="ri-lock-fill"></i></div>
                            <h5 className="card-title">Customer-centric</h5>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default MissionValues;