import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './SecurityProgram.css';

function SecurityProgram() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Rapidly mature your security program with DCAAM</h1>
                            <p>DCAAM aggregates data from multiple sources within your organization into a single platform. This allows customers to gain visibility, <br />establish baselines, and continuously improve upon their security while growing their business. </p>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="mt-5">
                            <img src={`${assetPath}images/security-program-img.png`} alt="Logo" className="img-fluid security-program-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SecurityProgram;