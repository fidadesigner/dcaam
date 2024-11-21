import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './TermsAndConditions.css';

function TermsAndConditions() {

    return(
        <> 
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1 className="text-primary">Terms and Conditions</h1>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={12} md={12}>
                            <h2>Terms of Service</h2>
                            <p>Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the / website and the InfoSec Toolkit application (the “Service”) operated by Information Security Toolkit LTD (“us”, “we”, or “our”).</p>
                            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Termination</h2>
                            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Subscriptions</h2>
                            <p>Some parts of the Service are billed on a subscription basis (“The Toolkit”). You will be billed in advance on a recurring basis throughout the use of the tool. This is based on the agreement made prior to the implementation of the tool. If payment is ceased for any reason, the services may cease at our discretion.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Content</h2>
                            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the appropriate use of this information, complying to all local, regional, and international laws as is reasonably expected.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Links To Other Web Sites</h2>
                            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Information Security Toolkit LTD. Information Security Toolkit LTD has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Information Security Toolkit LTD shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Changes</h2>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us on info@infosectoolkit.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default TermsAndConditions;