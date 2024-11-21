import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './OurLeadership.css';

function OurLeadership() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/leadership-bg-img.jpg`;


    return(
        <> 
            <section id="section" className="custom-pt-pb-5"
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>Our Leadership</h1>
                            <p>Trust is at the center of any well-functioning team, and Compyl is no different. As our team continues to grow, 
                            <br />we are consistent with our mission and values.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={12} md={6} className="text-center">
                            <img src={`${assetPath}images/leadership-img1.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-4" />
                            <h5 className="card-title">Stas Bojoukha</h5>
                            <p>CEO / Founder</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="text-center">
                            <img src={`${assetPath}images/leadership-img1.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-4" />
                            <h5 className="card-title">Stas Bojoukha</h5>
                            <p>CEO / Founder</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} sm={12} md={3} className="text-center">
                            <img src={`${assetPath}images/leadership-img3.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-3" />
                            <h6 className="mb-0">Stas Bojoukha</h6>
                            <p>CEO / Founder</p>
                        </Col>
                        <Col xs={12} sm={12} md={3} className="text-center">
                            <img src={`${assetPath}images/leadership-img4.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-3" />
                             <h6 className="mb-0">Stas Bojoukha</h6>
                            <p>CEO / Founder</p>
                        </Col>
                        <Col xs={12} sm={12} md={3} className="text-center">
                            <img src={`${assetPath}images/leadership-img5.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-3" />
                             <h6 className="mb-0">Stas Bojoukha</h6>
                            <p>CEO / Founder</p>
                        </Col>
                        <Col xs={12} sm={12} md={3} className="text-center">
                            <img src={`${assetPath}images/leadership-img6.png`} alt="Logo" className="img-fluid w-50 leadership-img mb-3" />
                             <h6 className="mb-0">Stas Bojoukha</h6>
                            <p>CEO / Founder</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default OurLeadership;