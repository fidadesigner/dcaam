import React, {useState} from "react";
import { Container, Row, Col, Button, Tabs, Tab, Card } from 'react-bootstrap';
import './AutomateManualWork.css';

function AutomateManualWork() {

    const [activeTab, setActiveTab] = useState('Automate_Manual_Work');

    return(
        <>
            <section id="section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={8} className="custom-center">
                            <h1>Automate Manual Work</h1>
                            <p>Compliance teams are stretched thin and struggle to keep up. Automate error-prone, <br />time 
                            consuming manual processes and give your team back time to focus on priority work.</p>
                            <Button variant="primary" className="mt-4">Learn More</Button>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="d-flex flex-column">
                        <Button variant={activeTab === 'Automate_Manual_Work' ? 'info' : 'outline-info'}
                            onClick={() => setActiveTab('Automate_Manual_Work')} 
                            className="mt-4 rounded-pill"><i class="ri-eye-line"></i> Automate Manual Work</Button>
                        <Button variant={activeTab === 'Bring_Clarity_to_Risk_Management' ? 'info' : 'outline-info'}
                            onClick={() => setActiveTab('Bring_Clarity_to_Risk_Management')} 
                            className="mt-4 rounded-pill"><i class="ri-eye-line"></i> Bring Clarity to Risk Management</Button>
                        <Button variant={activeTab === 'Make_Risk-Informed_Decisions' ? 'info' : 'outline-info'}
                            onClick={() => setActiveTab('Make_Risk-Informed_Decisions')} 
                            className="mt-4 rounded-pill"><i class="ri-eye-line"></i> Make Risk-Informed Decisions</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} className="mt-5">
                            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="d-none">
                                <Tab eventKey="Automate_Manual_Work" title="Tab 1">
                                    <Row className="gy-4">
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Single Unified View</Card.Title>
                                                    <Card.Text>
                                                    Consolidate all compliance and risk activities in a single, unified platform
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Aggregate Data</Card.Title>
                                                    <Card.Text>
                                                    Integrate with security tools and aggregate data for a more complete picture of risk
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Get Granular Insights</Card.Title>
                                                    <Card.Text>
                                                    Query your data to quickly surface specific, detailed information
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Convey Risk Impact</Card.Title>
                                                    <Card.Text>
                                                    Use qualitative and quantitative measures to clearly understand the impact of risk
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Monitor Risk</Card.Title>
                                                    <Card.Text>
                                                    Visualize key insights and metrics with customizable dashboards and reports
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={12} sm={6} md={4}>
                                            <Card className="text-center">
                                                <Card.Body>
                                                    <div className="icon-circle"><i class="ri-lock-fill"></i></div>
                                                    <Card.Title>Quantify Risk</Card.Title>
                                                    <Card.Text>
                                                    Quantify and communicate the business impact of risk in a way business leaders
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="Bring_Clarity_to_Risk_Management" title="Tab 2">
                                    <div>
                                        <h4>Tab 2 Content</h4>
                                        <p>This is the content for Tab 1.</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="Make_Risk-Informed_Decisions" title="Tab 3">
                                    <div>
                                        <h4>Tab 3 Content</h4>
                                        <p>This is the content for Tab 1.</p>
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

export default AutomateManualWork;