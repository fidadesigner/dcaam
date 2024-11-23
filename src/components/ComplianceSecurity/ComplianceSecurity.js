import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function ComplianceSecurity() {

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
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6}>
                            <h1>Understand early on, Compliance doesn't mean Security</h1>
                            <p>Due to a flood of audit preparation solutions in the market, start-ups are often left to believe that if they align with a compliance framework, they will be secure. This type of thinking couldn’t be further from the truth.</p>
                            <p>A compliance framework offers guidance, but if these tasks are only seen as a “check box” exercise, they will have minimal effect on the organization’s overall security posture.</p>
                            <Button variant="primary" className="mt-4" >Learn More</Button>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <img src={`${assetPath}images/home-banner-img.jpg`} alt="Logo" className="img-fluid home-banner-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ComplianceSecurity;