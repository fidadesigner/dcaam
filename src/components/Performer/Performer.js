import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Performer.css';

function Performer() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/performer-bg-img1.jpg`;

    return(
        <>  
            <section id="section" className="custom-pt-pb-5l performer" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <img src={`${assetPath}images/performer-img1.png`} alt="Logo" className="img-fluid performer-img mb-4" />
                            <p className="card-title mb-4"><strong>“It is a very responsive team with great support and incredible AI capabilities 
                            <br />to assist with managing policies, compliance, and risk.”</strong> </p>
                            <p><strong>– Mike Hamrah, Chief Security Officer</strong> </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Performer;