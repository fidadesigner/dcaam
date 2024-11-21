import React, { useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import "./GlossaryBanner.css";

function GlossaryBanner() {
  const [activeButton, setActiveButton] = useState("a"); 

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className="text-center">
            <h1>Glossary</h1>
            <p>All the terms used in the information security and compliance industry.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} sm={12} md={12}>
            <Nav className="flex-row align-items-center justify-content-md-around justify-content-center" id="scrollspyNav">
              {["a", "b", "c", "d", "g", "h", "i", "j", "k", "m", "n", "p", "r", "s", "v"].map((id) => (
                <Button
                  key={id}
                  variant="secondary"
                  href={`#${id}`}
                  className={activeButton === id ? "active" : ""}
                  onClick={() => handleButtonClick(id)}
                >
                  {id.toUpperCase()}
                </Button>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GlossaryBanner;
