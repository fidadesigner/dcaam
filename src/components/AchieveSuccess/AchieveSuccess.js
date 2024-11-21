import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './AchieveSuccess.css';

function AchieveSuccess() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

    return(
        <> 
            <section id="section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6}>
                            <h1>Achieve Success for your Customer and Yourself</h1>
                            <p>A modern, integrated GRC solution is crucial for your customers’ success and competitive advantage. By leveraging Compyl, you can strengthen your clients’ security posture with a trusted and reliable partner. </p>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <img src={`${assetPath}images/achieve-success-img.jpg`} alt="Logo" className="img-fluid achieve-success-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AchieveSuccess;