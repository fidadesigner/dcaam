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
                            <p>A control or standard is a defined setting that a business needs to DCAAM to in order to satisfy framework requirements and ultimately mitigate risk.</p>
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

            <section id="d" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">D</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Demilitarized Zone</h2>
                            <p>A DMZ is a physical or logical subnetwork that contains an organization’s exposed services while isolating the rest of the network from external networks, particularly the internet. A DMZ is used to add another layer of security to a LAN (local area network). Services such as web, email, proxy servers, and domain name systems are often held in a DMZ.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="g" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">G</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Gap Analysis / Gap Assessment</h2>
                            <p>A Gap Analysis or Assessment is a method of assessing an organization’s performance or compliance against a selected set of controls, policies, or specified set of questions. Gap Assessments can be conducted to better understand if requirements are being met and what an organization’s gaps are in DCAAMing to standards they have identified as essential.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Governance, Risk and Compliance</h2>
                            <p>Governance, risk, and compliance (GRC) refer to a company’s strategy for managing its overall governance, enterprise risk management, and compliance with regulations. GRC is an all-encompassing term that goes beyond audit prep and compliance and helps organizations to shape their security programs for continuous compliance and scalability.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">GDPR</h2>
                            <p>The General Data Protection Regulation is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area. Though it was drafted and passed by the EU, the law imposes obligations onto organizations anywhere, so long as they target or collect data related to people in the EU (GDPR.eu).</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="h" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">H</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">HIPAA Privacy Rule</h2>
                            <p>The HIPAA Privacy Rule establishes national standards to protect individuals’ medical records and other personal health information and applies to health plans, health care clearinghouses, and those health care providers that conduct certain health care transactions electronically (HHS.gov).</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="i" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">I</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Incident Response Framework</h2>
                            <p>An Incident Response Framework coordinates approaches to manage cyber incidents and fallout to limit the consequences. It guides the direction and definition of response preparedness, planning, and execution by outlining and detailing its elements, steps, and stages.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Identity Access Management</h2>
                            <p>Identity and Access Management refers to the system that manages digital identities and user access to data and systems across an organization. This includes all policies, procedures, technology, and other resources that contribute to the reduction of identity-related risk for the organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Indicators of Compromise</h2>
                            <p>Indicators of compromise (IOCs) refer to evidence of potential intrusions or vulnerabilities that InfoSec professionals and administrators use to detect and predict malicious cyber activities.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">ISO27001</h2>
                            <p>Best practices for information security management systems (ISMS) that are designed to regularly assess and treat threats and vulnerabilities through an organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Insurance Data Security Model Law 2017</h2>
                            <p>The model requires insurers and other entities licensed by a state department of insurance to develop, implement, and maintain an information security program based on its risk assessment, with a designated employee in charge of the information security program (National Association of Insurance Commissioners).</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="j" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">J</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Joiners Movers Leavers</h2>
                            <p>The Joiners, Movers and Leavers Process is a policy that defines how to manage the access and ownership of an organization’s assets for new users, existing users who move to other positions, and users who leave the organization.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="k" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">K</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Key Performance Indicators</h2>
                            <p>Key performance indicators are a common and effective method of measuring success of a security program, particularly over time. These KPIs can be determined prior to the commencement of the security program and are then analyzed and tracked as the security activities are taking place. By analyzing KPIs alongside other security metrics, such as risk indicators and compliance, an organization can gain visibility into how the security program and team are progressing in achieving defined security goals.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="m" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">M</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Maturity Assessment</h2>
                            <p>Maturity Assessments are utilized to see how an organization is performing over time. This can be done to assess both how well they are DCAAMing to the controls over time, as well as how their security posture is maturing overall. Metrics that apply here include trending activity on tasks, compliance to key frameworks year over year, and alignment to increased security controls as the organization grows and matures.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Multi-factor Authentication</h2>
                            <p>Multi-factor authentication refers to any 2+ step process to log into a secure digital environment, e.g. requiring an OAuth.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="n" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">N</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Network Architecture</h2>
                            <p>Network architecture refers to the design of computer network for an organization. This document specifies a network’s physical components, their functionalities, their configurations, and the operational procedures and communication methods they utilize.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NCSC NIS</h2>
                            <p>The EU Security of Networks & Information Systems (NIS) Directive aims to raise levels of cyber security and resilience of key systems across the EU. Companies and organizations identified as either operator of essential services (OES) or Competent Authorities (CAs) are primarily involved (The National Cyber Security Centre).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NIST CSF</h2>
                            <p>NIST Cybersecurity Framework is voluntary guidance, based on existing standards, guidelines, and practices for organizations to better manage and reduce cybersecurity risk. In addition to helping organizations manage and reduce risks, it was designed to foster risk and cybersecurity management communications amongst both internal and external organizational stakeholders (National Institute of Standards and Technology).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NIST RMF</h2>
                            <p>The NIST Risk Management Framework (RMF) provides a comprehensive, flexible, repeatable, and measurable 7-step process that any organization can use to manage information security and privacy risk for organizations and systems and links to a suite of NIST standards and guidelines to support the implementation of risk management programs to meet the requirements of the Federal Information Security Modernization Act (FISMA) (National Institute of Standards and Technology).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NIST SP 800-53</h2>
                            <p>NIST Special Publication (SP) 800-53, Revision 5, Security and Privacy Controls for Information Systems and Organizations, represents a multi-year effort to develop the next generation of security and privacy controls needed to strengthen and support the Federal Government and every sector of critical infrastructure. These next generation controls offer a detailed and proactive and systematic approach to ensuring that critical systems, components, and services are sufficiently trustworthy and have the necessary resilience to defend the economic and national security interests of the United States (National Institute of Standards and Technology).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NIST SP 800-171</h2>
                            <p>NIST SP 800-171 is a NIST Special Publication that provides recommended requirements for protecting the confidentiality of controlled unclassified information (CUI) (National Institute of Standards and Technology).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NERC-CIP - 5</h2>
                            <p>The NERC CIP (North American Electric Reliability Corporation critical infrastructure protection) plan is a set of requirements designed to secure the assets required for operating North America’s bulk electric system (BES). Its purpose is to manage electronic access to BES Cyber Systems by specifying a controlled Electronic Security Perimeter in support of protecting BES Cyber Systems against compromise that could lead to misoperation or instability in the BES (North American Electric Reliability Corporation).</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">NYDFS Cybersecurity Regulation</h2>
                            <p>23 NYCRR Part 500 is a regulation establishing cybersecurity requirements for financial services companies in New York.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="p" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">P</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Policies</h2>
                            <p>Internal agreed-upon rules for all members of the organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Procedures</h2>
                            <p>Step-by-step guide for DCAAMing with a policy.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Privileged Identity Management</h2>
                            <p>PIM is a framework consisting of policies and security solutions that tracks the activity of privileged users in an organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Privileged Access Management</h2>
                            <p>PAM is a framework of policies and security solutions that defines privileged access among users in an organization.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">PCI DSS</h2>
                            <p>PCI Security Standards are developed specifically to protect payment account data throughout the payment lifecycle and to enable technology solutions that devalue this data and remove the incentive for criminals to steal it. Specifically, PCI DSS applies to all entities that store, process, and/or transmit cardholder data. It covers technical and operational system components included in or connected to cardholder data (PCI Security Standards Council).</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="r" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">R</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Risk Management Framework</h2>
                            <p>A Risk Management Framework is the set of rules and guidelines that dictates how a risk management program is run. This included risk thresholds, monetary values for varying risk levels, and how risks are dealt with according to their score. This set of guidelines is usually defined in the Risk Management Policy.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Risk Assessment</h2>
                            <p>Risk assessment is the process of mapping, grading, and identifying risk-based events that could negatively impact an organization, particularly its IT assets and IT infrastructure.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Role-Based Access Control</h2>
                            <p>Role-based access control or role-based security is a method of linking access of authorized users to their defined role within an organization. This approach helps implement and maintain consistent, varying access controls across multiple systems.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Responsible, Accountable, Consulted, Informed</h2>
                            <p>A RACI chart, also known as the Responsibility Assignment Matrix, outlines the various roles for a project or process, and their level of involvement in in completing each task.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="s" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">S</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Security Operations Center</h2>
                            <p>A security operation center is a centralized command center that identifies and addresses security issues for an organization. It consists of a team of IT professionals that monitor and analyze all systems an organization utilizes to protect them from cyber-attacks.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Security Information and Event Management</h2>
                            <p>A SIEM is used to present a holistic view of an organization’s information security by collecting log and event data from network infrastructure, applications, devices, and other key assets. They provide real-time analysis of security alerts generated by applications and other relevant devices within a network.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">SOC 1</h2>
                            <p>Examines the effects of an organization’s control on financial statements.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">SOC 2</h2>
                            <p>A voluntary compliance standard, particularly for companies who store data in the cloud, that is used for determining if they are securely managing 3rd party data to ensure privacy and information protection.</p>
                            <p>There are two types of SOC 2 reports: Type 1 and Type 2. SOC 2 Type 1 asses the design of the security program and its processes at a point in time. SOC 2 Type 2 is the more comprehensive of the two, assessing the effectiveness of the controls over an observation period of 6 months.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">SOC 3</h2>
                            <p>While a SOC 2 report is a private report, a SOC 3 is a public report of the assessed internal controls.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="v" className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h1 className="text-primary">V</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Vendor Management System</h2>
                            <p>Vendor Management System is a web-based system for organizations to select and manage vendors, suppliers, and third parties as well as procure services, negotiate contracts, control costs, and reduce risks.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Virtual Local Area Network</h2>
                            <p>A VLAN (virtual LAN) is a subnetwork that groups together devices that share a physical LAN (local area network) and isolates them from each other. A LAN is a group of devices that share the same physical place and network. By enabling network administrators to separate groups of users by their locations into different LAN segments, VLANs allow for better access control for those groups as well help manage traffic on the larger network.</p>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className="mb-0">Virtual Private Network</h2>
                            <p>Virtual Private Networks extend secure connections to another network over the internet. VPNs are encrypted and disguise your IP address, therefore allowing for more privacy while using the internet. They are commonly used to send and receive data across shared networks, access regionally defined websites and protect browsing activities.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Glossary;