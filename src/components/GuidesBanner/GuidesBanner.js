import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './GuidesBanner.css';

function GuidesBanner() {

    return(
        <> 
            <section>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Guides</h1>
                            <p>The latest articles from our information security and compliance experts</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default GuidesBanner;