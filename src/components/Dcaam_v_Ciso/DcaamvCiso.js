import React, {useState} from "react";
import { Container, Row, Col, Button, Modal, Card, ListGroup } from 'react-bootstrap';
import DemoForm from "../../common_components/DemoForm/DemoForm";
import './DcaamvCiso.css';

function DcaamvCiso() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <section id="section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6}>
                            <h1>DCAAM vCISO Breakdown</h1>
                            <p>Our premier offering includes the Compyl Virtual CISO managed service. With access to our CISO suite, we will be the architects for the entire information security program by developing, managing, and implementing the organization’s complete security posture.</p>
                            <p>Finding a qualified CISO has proven challenging for many organizations due to a lack of available talent. With the average CISO salary costing well over $200,000/yr,organizations have found our vCISO value to rapidly mature and maintain a comprehensive security program tailored for their unique needs.</p>
                            <p>On average customers save over400 hours,see a return in investment in6 weeksin comparison to traditional consultancy.</p>
                            <Button variant="primary" className="mt-4" onClick={handleShow}>Request Demo</Button>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <Card className="bg-primary ciso-card">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Organisation and support: SOC 2, ISO, HITRUST, SOX, GDPR, & NIST</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Updates for new regulatory compliance requirements, legal obligations and framework revisions</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Provide strategic guidance, oversight and leadership to compliance and governance</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Train and educate on cybersecurity principles and best practices</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Incident management including playbooks and desktop exercises</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Infosec procurement management including reviews and advice</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Secure development and coding best practices review and assistance</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Risk committee x2</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Create and Send Newsletters x2</ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent text-white"><i class="text-white ri-checkbox-circle-fill me-2"></i>Organizing penetration testing</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
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
            </section>
        </>
    );
}

export default DcaamvCiso;