import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function GrcPlatform() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>A unified, flexible GRC platform helping you <br />reduce risk, stay compliant and drive growth.</h1>
                            <p>Your GRC program should reflect your business.  The DCAAM platform puts you in charge by helping your organization 
                            <br />scale and mature your GRC in the way that’s best for how work gets done across your organization. </p>
                            <img src={`${assetPath}images/grc-img.jpg`} alt="Logo" className="img-fluid grc-img mt-4" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default GrcPlatform;