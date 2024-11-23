import React from "react";
import GlossaryBanner from "../components/GlossaryBanner/GlossaryBanner";
import { Container, Row, Col } from "react-bootstrap";

function Glossary() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    return(
        <>
            <div className="bg-custom-gradient" 
                    style={{
                        backgroundImage: `url(${bgImageUrl})`,
                    }}
                >
                <GlossaryBanner />
            </div>
            <section id="a" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">A</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Active Directory</h2>
                            <p>Active Directory is a component of Microsoft’s corporate offering and acts as a master list that catalogues an organization’s users, computers and more. Your IT admin uses AD to structure your organization’s complete hierarchy of users and permissions and serves as the source of truth that trickles down to all other systems in an IT environment.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Australian Privacy Principles</h2>
                            <p>The Australian Privacy Principles (or APPs) are the cornerstone of the privacy protection framework in the Privacy Act 1988. The Australian Privacy Principles are principles-based law. This gives an organization or agency flexibility to tailor their personal information handling practices to their business models and the diverse needs of individuals. They are also technology neutral, which allows them to adapt to changing technologies (Office of the Australian Information Commissioner).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">APRA CPS 234</h2>
                            <p>This Prudential Standard CPS 234 aims to ensure that an APRA-regulated entity takes measures to be resilient against information security incidents (including cyberattacks) by maintaining an information security capability commensurate with information security vulnerabilities and threats (Australian Prudential Regulatory Authority).</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="b" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">B</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Business Continuity Plan</h2>
                            <p>A plan built for recovering business function if a critical system is disrupted.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="c" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">C</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Controls</h2>
                            <p>A control or standard is a defined setting that a business needs to comply to in order to satisfy framework requirements and ultimately mitigate risk.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">CIA - Confidentiality, Integrity, Availability</h2>
                            <p>The CIA Triad is a security model that is at the core of information security. It is utilized to help determine the criticality of systems, vendors, risks, and other assets related to an organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Chief Information Security Officer</h2>
                            <p>Chief Information Security Officer; this is the point person for all information security policies, procedures, and practices within your company. CISO is a reasonably new role to the C-Suite, but is growing rapidly as allocating security resources becomes a higher priority for companies.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">CAIQ</h2>
                            <p>The CAIQ questionnaire is a downloadable spreadsheet of yes or no questions corresponding to the controls of Cloud Security Alliance’s Cloud Controls Matrix (CCM), a cybersecurity controls framework for cloud computing. An IaaS, PaaS, or SaaS cloud service provider (CSP) can use the CAIQ to document what security controls exist in their services (Cloud Security Alliance).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">CMMC (Levels 1 through 5)</h2>
                            <p>The Cybersecurity Maturity Model Certification (CMMC) program enhances cyber protection standards for companies in the Defense Industrial Base (DIB). It is designed by the Department of Defense to protect sensitive unclassified information that is shared by the Department with its contractors and subcontractors. The program incorporates a set of cybersecurity requirements into acquisition programs and provides the Department increased assurance that contractors and subcontractors are meeting these requirements (Official U.S. Department of Defense).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">CCPA</h2>
                            <p>The California Consumer Privacy Act is a state statute intended to enhance privacy rights and consumer protection for residents of California (State of California Department of Justice, Office of the Attorney General).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">CSA-CCM 3.0.1</h2>
                            <p>The CSA Cloud Controls Matrix (CCM) is a cybersecurity control framework for cloud computing. It can be used as a tool for systematically assessing a cloud implementation and provides guidance on which security controls should be implemented by which actor within the cloud supply chain. The controls framework is aligned to the CSA Security Guidance for Cloud Computing and is considered a de-facto standard for cloud security assurance and compliance (Cloud Security Alliance).</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Glossary;