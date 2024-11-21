import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './ProductBanner.css';

function ProductBanner() {

    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <h1>Security for Your Growth</h1>
                        <p>Choose the right security plan for your organization and begin building a robust information security and compliance program.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductBanner;