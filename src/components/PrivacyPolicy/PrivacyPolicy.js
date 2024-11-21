import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';

function PrivacyPolicy() {

    return(
        <> 
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="text-center">
                            <h1 className="text-primary">Overview</h1>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={12} md={12}>
                            <h2>Application Privacy Policy / Terms of Service</h2>
                            <p>This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</p>
                            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>What data do we collect</h2>
                            <p>Our Company collects the following data:</p>
                            <ul>
                                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                                <li>Cookies / Website analytics</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>How do we collect your data?</h2>
                            <p>You directly provide Information Security Toolkit LTD with the data we collect. We collect data and process data when you:</p>
                            <ul>
                                <li>Sign up for additional information or our newsletter</li>
                                <li>Use or view our website via your browser’s cookies.</li>
                                <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
                                <li>Request us to contact you back</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>How will we use your data?</h2>
                            <p>When you provide us with your data, it’s for a specific purpose. We will only use your data for its intended purpose.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2>What are my rights?</h2>
                            <p>Information Security Toolkit LTD would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                            <ul>
                                <li>The right to access – You have the right to request Information Security Toolkit LTD for copies of your personal data. We may charge you a small fee for this service.</li>
                                <li>The right to rectification – You have the right to request that Information Security Toolkit LTD correct any information you believe is inaccurate. You also have the right to request Information Security Toolkit LTD to complete the information you believe is incomplete.</li>
                                <li>The right to erasure – You have the right to request that Information Security Toolkit LTD erase your personal data, under certain conditions.</li>
                                <li>The right to restrict processing – You have the right to request that Information Security Toolkit LTD restrict the processing of your personal data, under certain conditions.</li>
                                <li>The right to object to processing – You have the right to object to Our Company’s processing of your personal data, under certain conditions.</li>
                                <li>The right to data portability – You have the right to request that Information Security Toolkit LTD transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                            </ul>
                            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: info@infosectoolkit.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PrivacyPolicy;