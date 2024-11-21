import React from "react";
import './Footer.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/assets/';
    const bgImageUrl = `${assetPath}images/footer-bg-img.jpg`;

    return(
        <>
            <section id="section" className="custom-pt-pb-5 footer" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <Container fluid>
                    <Row>
                        <Col md={12} className="d-block d-md-flex justify-content-between footer-links">
                            <div>
                                <h5 className="card-title text-white mb-4">Overview</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/how-it-work">How it Works</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">Integration</ListGroup.Item>
                                </ListGroup>
                                <h5 className="card-title text-white mb-4 mt-5">Products</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/audit-prep">Audit Prep</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/grc">GRC</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/enterprise">Enterprise</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="card-title text-white mb-4">Resources</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/glossary">Glossary</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Blog</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/guides">Guides</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Education Center</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Security Sessions</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/partner-network">Partner Network</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Case Studies</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="card-title text-white mb-4">Frameworks</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/how-it-works">SOC 2</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">ISO 27001</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">HIPAA</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">GDPR</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">PCI</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">NIST CSF</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">NIST SP800-53</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">MAS</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">HITRUST</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/integration">See All Frameworks</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="card-title text-white mb-4">Solutions</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Risk Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Vendor Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Policy Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Contract Management</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Entitlement Reviews</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">IT Asset Management</ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <h5 className="card-title text-white mb-4">Company</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/about-us">About Us</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/our-security">Our Security</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="">Careers</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/contact-us">Contact Us</ListGroup.Item>
                                </ListGroup>
                                <h5 className="card-title text-white mb-4 mt-5">Privacy & Terms</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/privacy-policy">Privacy Policy</ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent text-white border-0 p-0" as={Link} to="/terms-and-conditions">Terms and Conditions</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr className="border-white mt-5 mb-5" />
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="d-flex align-items-center justify-content-between">
                            <p className="text-white mb-0">© DCAAM.ai 2024</p>
                            <div>
                                <Link to="/" className="text-white text-decoration-none me-md-4 me-2"><i class="ri-facebook-box-fill"></i></Link>
                                <Link to="/" className="text-white text-decoration-none me-md-4 me-2"><i class="ri-linkedin-box-fill"></i></Link>
                                <Link to="/" className="text-white text-decoration-none me-md-4 me-2"><i class="ri-twitter-x-line"></i></Link>
                                <Link to="/" className="text-white text-decoration-none"><i class="ri-instagram-fill"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Footer;