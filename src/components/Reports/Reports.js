import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Reports.css';

function Reports() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';

    return(
        <> 
            <section id="section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1>G2 Fall 2024 Reports are out, and our <br />users love DCAAM!</h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} className="mt-4 d-flex align-items-center justify-content-around">
                            <img src={`${assetPath}images/report-img1.png`} alt="Logo" className="img-fluid report-img" />
                            <img src={`${assetPath}images/report-img2.png`} alt="Logo" className="img-fluid report-img" />
                            <img src={`${assetPath}images/report-img3.png`} alt="Logo" className="img-fluid report-img" />
                            <img src={`${assetPath}images/report-img4.png`} alt="Logo" className="img-fluid report-img" />
                            <img src={`${assetPath}images/report-img5.png`} alt="Logo" className="img-fluid report-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Reports;