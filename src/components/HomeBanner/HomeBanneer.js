import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DemoForm from "../../common_components/DemoForm/DemoForm";

function HomeBanner() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6} className="custom-center">
                        <h1>GRC Your Way</h1>
                        <p>Xyber is a cutting-edge cybersecurity service designed to safeguard businesses 
                        and individuals from the ever-growing array of online threats.</p>
                        <div className="mt-5">
                            <Button variant="primary" className="me-2" onClick={handleShow}>Request Demo</Button>
                            <Button variant="outline-secondary" className="ms-2">Learn More</Button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <img src={`${assetPath}images/home-banner-img.jpg`} alt="Logo" className="img-fluid home-banner-img custom-d-none" />
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="request-demo-large-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Request Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DemoForm />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomeBanner;