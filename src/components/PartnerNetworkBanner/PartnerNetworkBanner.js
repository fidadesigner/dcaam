import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function PartnerNetworkBanner() {

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h1>Join the DCAAM Connect Partner Network</h1>
                        <p>Grow your business and deliver more value to customers with the leading integrated GRC platform.</p>
                        <Button variant="primary" size="lg" className="mt-4">Join Now</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PartnerNetworkBanner;