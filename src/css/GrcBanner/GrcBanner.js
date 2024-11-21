import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DemoForm from "../../common_components/DemoForm/DemoForm";

function GrcBanner() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <p className="text-primary">GRC</p>
                        <h1>Innovative Infosec and Compliance Platform</h1>
                        <p>Uncover the power of a centralized all-in-one automation platform that will streamline your entire infosec and compliance program. </p>
                        <Button variant="primary" className="mt-4" onClick={handleShow}>Request Demo</Button>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <img src={`${assetPath}images/audit-prep-banner-img.jpg`} alt="Logo" className="img-fluid audit-prep-banner-img" />
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

export default GrcBanner;