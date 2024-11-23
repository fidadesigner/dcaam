import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './ImportantNote.css';

function ImportantNote() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/join-bg-img.jpg`;

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
                            <h1 className="mb-0">If you struggle to manage InfoSec and Compliance internally, <br />then 
                            our Managed Service may be just what you need. </h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ImportantNote;