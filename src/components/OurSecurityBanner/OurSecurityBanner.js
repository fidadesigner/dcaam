import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function OurSecurityBanner() {

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h1>Security at DCAAM</h1>
                        <p>Scale your organization securely with DCAAM, the trusted solution for continuous information 
                        <br />security and compliance monitoring.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default OurSecurityBanner;