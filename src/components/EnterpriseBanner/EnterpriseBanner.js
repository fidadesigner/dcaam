import React, {useState} from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DemoForm from "../../common_components/DemoForm/DemoForm";
import './EnterpriseBanner.css';

function EnterpriseBanner() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6}>
                        <p className="text-primary">ENTERPRISE</p>
                        <h1>Maintain clarity at all times.</h1>
                        <p>Compyl reduces the resources required to manage your organization’s needs with a completely customized information security and compliance automation platform. </p>
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

export default EnterpriseBanner;