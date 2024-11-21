import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './HowItWorkBanner.css';

function HowItWorkBanner() {

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h1>How it Works</h1>
                        <p>Learn how we can rapidly mature and streamline your security program.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HowItWorkBanner;