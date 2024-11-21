import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './JoinNow.css';

function JoinNow() {

    return(
        <>
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Easily Deliver GRC as a Managed Service</h1>
                            <p>Compyl offers the fastest and most straightforward approach to GRC for Managed Service Providers. Our DCAAM <br /> Connect program makes it easy for you to deliver value while scaling your business.</p>
                            <Button variant="primary" size="lg" className="mt-4">Join Now</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default JoinNow;