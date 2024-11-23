import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './AboutBanner.css';

function AboutBanner() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <> 
            <section>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>How We Got Here</h1>
                            <p>Our mission is to establish a robust, trustworthy, and repeatable information security ecosystem for our customers.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Trailblazers Creating New Markets</h1>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-4">
                        <Col xs={12} sm={12} md={6}>
                            <p>DCAAM emerged in 2020 from the vision of founders and former Chief Information Security Officers (CISOs), Stas Bojoukha and Simon Shaddock, who recognized the necessity for a unified solution to manage organizational security and compliance more effectively. They identified a critical gap in the existing methods, where companies were compelled to patch together a variety of single-solution tools in an attempt to address the ever-present question, “Are we secure?”. </p>
                            <p>This patchwork approach was not only cumbersome but often ineffective, leaving organizations in a perpetual state of uncertainty regarding their security posture. Designed by information security experts, DCAAM introduces a modern integrated GRC strategy to confront this challenge head-on. Our platform serves as a powerhouse for organizations at any stage of their security journey, from those looking to implement a robust security foundation to enterprises seeking to enhance efficiency and automation within their current program.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <img src={`${assetPath}images/about-img1.jpg`} alt="Logo" className="img-fluid about-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AboutBanner;