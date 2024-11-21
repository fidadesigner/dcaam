import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./IntegrationBanner.css";

function IntegrationBanner() {

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className="text-center">
            <h1>Explore our Integrations</h1>
            <p>Gain the power of security and compliance automation by integrating Compyl with your organization’s technology.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IntegrationBanner;
