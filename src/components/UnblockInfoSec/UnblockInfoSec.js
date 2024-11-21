import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function UnblockInfoSec() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
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
                            <h1>Unblock Infosec Bottlenecks</h1>
                            <p>There is no such thing as one size fits all when it comes to information security and compliance. Each company faces unique challenges that need to be unblocked in order to scale securely and meet business objectives.</p>
                            <p>Compliance doesn’t have to be a burden. Compyl eliminates the silo’s within an organization and centralizes the most critical information by aggregating data and turning it into actional insights.</p>
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

export default UnblockInfoSec;