import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DemoForm from "../../common_components/DemoForm/DemoForm";

function AuditBanner() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <p className="text-primary">Audit Prep</p>
                        <h1>All the InfoSec and <br />Compliance Essentials</h1>
                        <p>Close new deals, confirm product-market fit, and secure new funding. Investing in security from the start helps clear away obstacles that might slow your progress later on. </p>
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

export default AuditBanner;