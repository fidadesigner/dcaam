import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function UnparalleledFunctionality() {

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
                            <h1>Unparalleled Functionality</h1>
                            <p>By interconnecting data from multiple areas across an organization, Comypl will identify gaps in your security program and discover granular details that otherwise would be very difficult to uncover.</p>
                            <p>Discover the power of DCAAM and how the centralized platform will rapidly mature your security program. </p>
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

export default UnparalleledFunctionality;