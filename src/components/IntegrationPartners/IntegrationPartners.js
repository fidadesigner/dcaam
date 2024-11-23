import React, { useState } from "react";
import { Container, Row, Col, Button, Tabs, Tab, Card } from 'react-bootstrap';
import "./IntegrationPartners.css";

function IntegrationPartners() {
    
    const assetPath = process.env.REACT_APP_ASSET_BASE_URL || '/dcaam/assets/';
    const [activeTab, setActiveTab] = useState('All');

    return (
        <>
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="custom-integration-btns d-flex align-items-center justify-content-md-around justify-content-center flex-wrap">
                            <Button variant={activeTab === 'All' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('All')}>All</Button>
                            <Button variant={activeTab === 'Enterprise' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Enterprise')}>Enterprise</Button>
                            <Button variant={activeTab === 'Productivity_Tools' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Productivity_Tools')}>Productivity Tools</Button>
                            <Button variant={activeTab === 'SSO' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('SSO')}>SSO</Button>
                            <Button variant={activeTab === 'Security_Tools' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Security_Tools')}>Security Tools</Button>
                            <Button variant={activeTab === 'Database' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Database')}>Database</Button>
                            <Button variant={activeTab === 'CRM' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('CRM')}>CRM</Button>
                            <Button variant={activeTab === 'Training' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Training')}>Training</Button>
                            <Button variant={activeTab === 'Financial_Tools' ? 'info' : 'outline-info'}
                                onClick={() => setActiveTab('Financial_Tools')}>Financial Tools</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="mt-5 integration-card">
                            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="d-none">
                                <Tab eventKey="All" title="Tab 1">
                                    <Row className="gy-4">
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={4} md={3}>
                                            <Card className="bg-grey">
                                                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                                                    <img src={`${assetPath}images/integration-logo1.png`} alt="Logo" className="img-fluid integration-logo" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="Enterprise" title="Tab 2">
                                    <div className="text-center">
                                        <h4>Enterprise Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="Productivity_Tools" title="Tab 3">
                                    <div className="text-center">
                                        <h4>Productivity Tools Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="SSO" title="Tab 4">
                                    <div className="text-center">
                                        <h4>SSO Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="Security_Tools" title="Tab 5">
                                    <div className="text-center">
                                        <h4>Security Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="Database" title="Tab 6">
                                    <div className="text-center">
                                        <h4>Database Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="CRM" title="Tab 7">
                                    <div className="text-center">
                                        <h4>CRM Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="Training" title="Tab 8">
                                    <div className="text-center">
                                        <h4>Training Data</h4>
                                    </div>
                                </Tab>
                                <Tab eventKey="Financial_Tools" title="Tab 9">
                                    <div className="text-center">
                                        <h4>Financial Tools Data</h4>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default IntegrationPartners;
