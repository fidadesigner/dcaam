import React, {useState} from "react";
import './Header.css';
import { Navbar, Nav, Container, NavDropdown, Button, Modal, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DemoForm from "../DemoForm/DemoForm";

function Header() {

    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const bgImageUrl = `${assetPath}images/gradient-bg-img.jpg`;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ShowDropdown, setShowDropdown] = useState(
        {
            solutions: false,
            frameworks: false,
            resources: false,
            company: false
        }
    );

    const handleMouseEnter = (dropdownName) => {
        setShowDropdown((prevState) => ({
          ...prevState,
          [dropdownName]: true,
        }));
    };

    const handleMouseLeave = (dropdownName) => {
        setShowDropdown((prevState) => ({
          ...prevState,
          [dropdownName]: false,
        }));
    };

    const closeDropdownMenu = (dropdownName) => {
        setShowDropdown((prevState) => ({
            ...prevState,
            [dropdownName]: false,
        }));
    };

    const showDropdownMenu = (dropdownName) => {
        setShowDropdown((prevState) => ({
            ...prevState,
            [dropdownName]: true,
        }));
    };

    const handleLinkClick = () => {
        setShowDropdown(
            {
                solutions: false,
                frameworks: false,
                resources: false,
                company: false
            }
        );
    };

    return(
        <>
            <div className="bg-custom-gradient" 
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            >
                <Navbar expand="lg" className="bg-transparent">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
                            <img src={`${assetPath}images/logo.png`} alt="Logo" className="img-fluid logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                            <NavDropdown 
                                title={
                                    < > 
                                        <span onClick={() => showDropdownMenu("solutions")}>
                                            Solutions<i class="ri-arrow-down-s-line"></i>
                                        </span>
                                    </>
                                } 
                                id="navbarScrollingDropdown"
                                show={ShowDropdown.solutions}
                                onMouseEnter={() => handleMouseEnter("solutions")}
                                onMouseLeave={() => handleMouseLeave("solutions")}
                                
                                >
                                <Container fluid>
                                    <Button variant="link" className="text-decoration-none custom-close-btn d-md-none d-block"
                                        onClick={() => closeDropdownMenu("solutions")}
                                    >
                                        <i class="ri-close-line"></i>
                                    </Button>
                                    <Row>
                                        <Col md={3}>
                                            <Row>
                                                <Col md={12}>
                                                    <h5 className="card-title mb-4 text-primary">Overview</h5>
                                                    <div>
                                                        <p className="mb-2">
                                                            <Link className="text-decoration-none custom-link" to="/how-it-work" onClick={handleLinkClick}>
                                                                <strong>How it Works</strong>
                                                            </Link>
                                                        </p>
                                                        <p>Continuously improve upon the security program while continuing to grow the business.</p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2">
                                                            <Link className="text-decoration-none custom-link" to="/integration" onClick={handleLinkClick}>
                                                                <strong>Integrations</strong>
                                                            </Link>
                                                        </p>
                                                        <p>DCAAM works with the technology your organization works with.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={9}>
                                            <Row>
                                                <Col md={12}>
                                                    <h5 className="card-title mb-4 text-primary">Products</h5>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2">
                                                        <Link className="text-decoration-none custom-link" to="/audit-prep" onClick={handleLinkClick}>
                                                            <strong>Audit Prep</strong>
                                                        </Link>
                                                    </p>
                                                    <p>Begin building a scalable security program.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2">
                                                        <Link className="text-decoration-none custom-link" to="/grc" onClick={handleLinkClick}>
                                                            <strong>GRC</strong>
                                                        </Link>
                                                    </p>
                                                    <p>Mature your security program quickly.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2">
                                                        <Link className="text-decoration-none custom-link" to="/enterprise" onClick={handleLinkClick}>
                                                            <strong>Enterprise</strong>
                                                        </Link>
                                                    </p>
                                                    <p>Streamline security with automated efficiencies.</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col md={12}>
                                                    <h5 className="card-title mb-4 text-primary">Solutions</h5>
                                                </Col>
                                            </Row>
                                            <Row>    
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>Risk management</strong></p>
                                                    <p>Build and maintain a robust risk management process.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>Policy Management</strong></p>
                                                    <p>Create and centralize policies, standards, and procedures.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>Entitlement reviews</strong></p>
                                                    <p>Establish and monitor permissions for all users.</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-2">
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>vendor management</strong></p>
                                                    <p>Manage vendor due diligence and risk assessments.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>Contract Management</strong></p>
                                                    <p>Securely store and monitor all contracts.</p>
                                                </Col>
                                                <Col md={4}>    
                                                    <p className="mb-2"><strong>it asset management</strong></p>
                                                    <p>Catalog, access, and track all IT Assets.</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/product" onClick={handleLinkClick}>Product</Nav.Link>
                            <NavDropdown 
                                title={
                                    <>
                                        <span onClick={() => showDropdownMenu("frameworks")}>
                                            Frameworks<i class="ri-arrow-down-s-line"></i>
                                        </span>
                                    </>
                                } 
                                id="navbarScrollingDropdown"
                                show={ShowDropdown.frameworks}
                                onMouseEnter={() => handleMouseEnter("frameworks")}
                                onMouseLeave={() => handleMouseLeave("frameworks")}
                                >
                                <Container fluid>
                                    <Button variant="link" className="text-decoration-none custom-close-btn d-md-none d-block"
                                        onClick={() => closeDropdownMenu("frameworks")}
                                    >
                                        <i class="ri-close-line"></i>
                                    </Button>
                                    <Row>
                                        <Col md={12}>
                                            <h5 className="card-title mb-4 text-primary">Frameworks</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>SOC 2 Attestation</strong>
                                                </Link>
                                            </p>
                                            <p>Demonstrate the ability to effectively safeguard customer data's security, integrity, confidentiality, and privacy.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>GDPR</strong>
                                                </Link>
                                            </p>
                                            <p>Regulation for companies that collect and process personal information from individuals in EU.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>NIST SP800-53</strong>
                                                </Link>
                                            </p>
                                            <p>Improve the security posture of information systems used within the federal government.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>ISO 27001</strong>
                                                </Link>
                                            </p>
                                            <p>Prove the strength of your Information Security Management System to prospects and customers worldwide.</p>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>PCI</strong>
                                                </Link>
                                            </p>
                                            <p>For organizations that accept, process, store or transmit credit card information.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>MAS</strong>
                                                </Link>
                                            </p>
                                            <p>Guidelines to encourage best practices among financial institutions in Singapore.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>HIPAA</strong>
                                                </Link>
                                            </p>
                                            <p>Organizations handling health information need to have measures in place & follow them.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>NIST CSF</strong>
                                                </Link>
                                            </p>
                                            <p>Guides organizations in any industry to better manage and reduce their cybersecurity risk.</p>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col md={12} className="text-center">
                                            <Button variant="primary">See All Frameworks</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/partner-network" onClick={handleLinkClick}>Partner Network</Nav.Link>
                            <NavDropdown 
                                title={
                                    <>
                                        <span onClick={() => showDropdownMenu("resources")}>
                                            Resources<i class="ri-arrow-down-s-line"></i>
                                        </span>
                                    </>
                                } 
                                id="navbarScrollingDropdown"
                                show={ShowDropdown.resources}
                                onMouseEnter={() => handleMouseEnter("resources")}
                                onMouseLeave={() => handleMouseLeave("resources")}
                                >
                                <Container fluid>
                                    <Button variant="link" className="text-decoration-none custom-close-btn d-md-none d-block"
                                        onClick={() => closeDropdownMenu("resources")}
                                    >
                                        <i class="ri-close-line"></i>
                                    </Button>
                                    <Row>
                                        <Col md={12}>
                                            <h5 className="card-title mb-4 text-primary">Resources</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="/glossary" onClick={handleLinkClick}>
                                                    <strong>Glossary</strong>
                                                </Link>
                                            </p>
                                            <p>Terms used in the InfoSec & Compliance community.</p>
                                        </Col>
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="/guides" onClick={handleLinkClick}>
                                                    <strong>Guides</strong>
                                                </Link>
                                            </p>
                                            <p>Let Us Guide You Through Your InfoSec & Compliance Journey.</p>
                                        </Col>
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>Security Sessions</strong>
                                                </Link>
                                            </p>
                                            <p>Watch all Security Session Episodes</p>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>Blog</strong>
                                                </Link>
                                            </p>
                                            <p>The latest on InfoSec and Compliance trending topics.</p>
                                        </Col>
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>Education Center</strong>
                                                </Link>
                                            </p>
                                            <p>Learn how to use the Compyl Platform.</p>
                                        </Col>
                                        <Col md={4}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>Case Studies</strong>
                                                </Link>
                                            </p>
                                            <p>Real-world stories on how we help our customers.</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown 
                                title={
                                    <>
                                        <span onClick={() => showDropdownMenu("company")}>
                                            Company<i class="ri-arrow-down-s-line"></i>
                                        </span>
                                    </>
                                } 
                                id="navbarScrollingDropdown"
                                show={ShowDropdown.company}
                                onMouseEnter={() => handleMouseEnter("company")}
                                onMouseLeave={() => handleMouseLeave("company")}
                                >
                                <Container fluid>
                                    <Button variant="link" className="text-decoration-none custom-close-btn d-md-none d-block"
                                        onClick={() => closeDropdownMenu("company")}
                                    >
                                        <i class="ri-close-line"></i>
                                    </Button>
                                    <Row>
                                        <Col md={12}>
                                            <h5 className="card-title mb-4 text-primary">Company</h5>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="/about-us" onClick={handleLinkClick}>
                                                    <strong>About Us</strong>
                                                </Link>
                                            </p>
                                            <p>Our mission and purpose are unique, just like the solution we created.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="/our-security" onClick={handleLinkClick}>
                                                    <strong>Our Security</strong>
                                                </Link>
                                            </p>
                                            <p>We are very serious about our security. See the measures we take.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="" onClick={handleLinkClick}>
                                                    <strong>Careers</strong>
                                                </Link>
                                            </p>
                                            <p>Join our diverse team of intelligent, respectful, and passionate individuals.</p>
                                        </Col>
                                        <Col md={3}>    
                                            <p className="mb-2">
                                                <Link className="text-decoration-none custom-link" to="/contact-us" onClick={handleLinkClick}>
                                                    <strong>Contact Us</strong>
                                                </Link>
                                            </p>
                                            <p>We are ready to secure your organization today!</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </NavDropdown>
                        </Nav>
                        <div className="d-flex mt-md-0 mt-4">
                            <Button variant="outline-secondary" className="me-2">Create Your Ticket</Button>
                            <Button variant="primary" className="ms-2" onClick={handleShow}>Request Demo</Button>
                        </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
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

export default Header;